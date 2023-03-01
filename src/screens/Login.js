import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  BackHandler,
  LogBox,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles';
import {useNavigation} from '@react-navigation/native';
import ProjectURL from '../constant/constant';
import {Icon} from 'react-native-elements';

let backPressed = 0;

LogBox.ignoreLogs(['Warning:  Possible Unhandled Promise Rejection (id: 0)']);
LogBox.ignoreAllLogs();
export default class Login extends  React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: 'cyrnitishm', //#'cyrnitishm',
      password: 'pune@123', // #'pune@123',
      error: '',
    };
  }

  componentDidMount = () => {
    this.clearallData();

    console.log('login page called and all data cleared');
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  };

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      if (backPressed == 0) {
        BackHandler.exitApp();
      }
    }
  };

  icon = () => {
    let icon = '';
    icon = 'lock-closed';
    return icon;
  };

  clearallData = async () => {
    let user_id = await AsyncStorage.getItem('userToken');
    await AsyncStorage.removeItem(key);
    if (user_id != null) {
      const keys = await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => Alert.alert('Storage cleared successfully'));
    } else {
      const keys = await AsyncStorage.getAllKeys().then(keys =>
        AsyncStorage.multiRemove(keys),
      );
      console.log('No storage found');
    }
  };

  onClickListener = props => {
    const {email, password} = this.state;

    if (email == '') {
      Alert.alert('Username should not be blank');
    } else if (password == '') {
      Alert.alert('Password should not be blank');
    } else {
      this.setState({error: null});
      fetch(ProjectURL + `/jderest/v2/tokenrequest`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(response => {
          console.log('defaultApp -> data', response);
          AsyncStorage.clear();
          AsyncStorage.setItem('userToken', response.userInfo.token);
          AsyncStorage.setItem('userName', response.userInfo.alphaName);
          AsyncStorage.setItem('userEmail', response.username);
          console.log('tokeeen',response.userInfo.token)
          fetch(ProjectURL + `/jderest/v2/formservice`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            
              token: response.userInfo.token,
              formName: 'P43081_W43081A',
              outputType: 'GRID_DATA',
              formServiceAction: 'R',
              returnControlIDs: '1[22,21,24,183,65,187,173,191]',
              version: 'ZJDE0002',
              findOnEntry: 'true',
            }),
          })
            .then(response => response.json())
            .then(response => {
              console.log(
                'response',
                response,
              );
          
             
            })
            .catch(err => {
              console.log(err);
            
              // Alert.alert('Error')
            });
          this.props.navigation.navigate('Home', {
            screen: 'Home',
            params: {alphaName: response.userInfo.alphaName},
          });
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Enter valid Username and Password');
        });
    }
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={[styles.item]}>
          <Image
            style={styles.image}
            source={require('../images/cyret-logo-white.png')}
          />
          <Text style={styles.loginText}>Welcome</Text>
          <Text style={styles.loginText1}>Sign in to continue</Text>
        </View>
        <View style={[styles.item1, {paddingTop: 30}]}>
          <Text style={styles.loginText2}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="User ID"
              placeholderTextColor="grey"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </View>
          <View>
            <TouchableHighlight
              style={[styles.buttonContainer]}
              onPress={() => this.onClickListener()}>
              <Text style={styles.loginText3}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableHighlight>

            <Image
              style={styles.image1}
              source={require('../images/CyretFullLogo.png')}
            />
          </View>
        </View>
      </View>

      // <View style={styles.container}>
      //   <Image
      //     style={styles.image}
      //     source={require('../images/CyretFullLogo.png')}
      //   />
      //   <Text style={styles.titleText}>Sign In </Text>
      //   <View style={styles.inputContainer}>
      //     <TextInput
      //       style={styles.inputs}
      //       placeholder="User ID"
      //       placeholderTextColor="grey"
      //       keyboardType="email-address"
      //       underlineColorAndroid="transparent"
      //       onChangeText={email => this.setState({email})}
      //     />
      //   </View>

      //   <View style={styles.inputContainer}>
      //     <TextInput
      //       style={styles.inputs}
      //       placeholder="Password"
      //       secureTextEntry={true}
      //       underlineColorAndroid="transparent"
      //       onChangeText={password => this.setState({password})}
      //     />
      //   </View>

      //   <TouchableHighlight
      //     style={[styles.buttonContainer, styles.loginButton]}
      //     onPress={() => this.onClickListener()}>
      //     <Text style={styles.loginText}>Sign In</Text>
      //   </TouchableHighlight>

      //   <TouchableHighlight
      //     onPress={() => this.props.navigation.navigate('ForgotPassword')}>
      //     <Text style={styles.forgotText}>Forgot your password?</Text>
      //   </TouchableHighlight>
      // </View>
    )
  }
}