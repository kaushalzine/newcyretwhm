import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  ScrollViewBackgroundLayer,
  Image,
  TextInput,
  Dimensions,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native'; import React, { useEffect, useState } from 'react'
import OutlineInput from 'react-native-outline-input';
import styles from '../style/styles';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProjectURL from '../constant/constant';
import { element } from 'prop-types';


export default function CycleCount() {
  const countries = ['UOM', 'GM', 'CM', 'M'];
  const [cyclecount_list, setCyclecount_list] = useState([]);
  const [selectedResponseHeader, setSelectedResponseHeader] = useState([]);
  const [selectedResponseRowset, setSelectedResponseRowset] = useState([]);

  fetchInfo = async () => {
    let user = await AsyncStorage.getItem('userName');
    let userToken = await AsyncStorage.getItem('userToken');
    console.log('user', user, userToken);
    // Alert.alert("-------", userToken)



    fetch(ProjectURL + `/jderest/v2/dataservice`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        token: userToken,
        targetName: "V4140A",
        targetType: "view",
        dataServiceType: "BROWSE",
        maxPageSize: "20",
        returnControlIDs: "F4140.CYNO",
        query: {
          autoFind: true,
          condition:
            [{
              value:
                [{
                  content: "50",
                  specialValueId: "LITERAL"
                }
                ],
              controlId: "F4140.CYCS",
              operator: "LESS"
            }
            ],
          value:
            [{
              content: "40",
              specialValueId: "LITERAL"
            }
            ],
          controlId: "F4140.CYCS",
          operator: "EQUAL"
        }
      }),
    })
      .then(response => response.json())
      .then(response => {
        let data = response.fs_DATABROWSE_V4140A.data.gridData.rowset
        let x = [];
        data.forEach((i) => {
          x.push(i['F4140_CYNO'])
        })
        setCyclecount_list(x)
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("Cycle count call")

    fetchInfo()
  }, []);


  const selectedDropDown = async (index) => {
    let user = await AsyncStorage.getItem('userName');
    let userToken = await AsyncStorage.getItem('userToken');
    console.log(index)
    fetch(ProjectURL + `/jderest/v2/dataservice`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        token: userToken,
        targetName: "V4141A",
        targetType: "view",
        dataServiceType: "BROWSE",
        maxPageSize: "20",
        returnControlIDs: "F4141.TQCT|F4141.CYNO|F4141.LITM|F4141.LOCN|F4141.LOTN|F4141.STUN|F4141.MCU",
        query: {
          autoFind: true,
          condition:
            [{
              value:
                [{
                  content: index,
                  specialValueId: "LITERAL"
                }
                ],
              controlId: "F4140.CYNO",
              operator: "EQUAL"
            }
            ]
        }
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response.fs_DATABROWSE_V4141A.data.gridData)
        let data = response.fs_DATABROWSE_V4141A.data.gridData
        setSelectedResponseHeader(data.columns)
        setSelectedResponseRowset(data.rowset)
        // let data = response.fs_DATABROWSE_V4140A.data.gridData.rowset
        // let x = [];
        // data.forEach((i) => {
        //   x.push(i['F4140_CYNO'])
        // })
        // setCyclecount_list(x)
      })
      .catch(err => {
        console.log(err);
      });

  }

  const onQuantity = (values)=>{
    console.log('-------',values)
  }

  return (
    <View style={{ backgroundColor: '#FFFF', flex: 1 }}>
      <SafeAreaView>
        <View>
          <View style={[styles.transfer_card, { backgroundColor: '#0000' }]}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View style={{ width: '75%', margin: 5, paddingLeft: 10 }}>
                <SelectDropdown
                  data={cyclecount_list}
                  // style={{height:'10%',width:5}}
                  defaultButtonText={'Select value'}
                  renderDropdownIcon={isOpened => {
                    return (
                      <Ionicons
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#444'}
                        size={18}
                      />
                    );
                  }}
                  dropdownIconPosition={'right'}
                  buttonStyle={{
                    height: 40,
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderColor: '#b2b2b2',
                    borderWidth: 1,
                    borderRadius: 5,
                  }}
                  buttonTextStyle={{ fontSize: 15, color: '#1d4355' }}
                  onSelect={index => {
                    selectedDropDown(index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
              <View style={styles.verticleLine}></View>
              <View style={{ alignSelf: 'center', paddingRight: 15 }}>
                <Image
                  source={require('../images/qr-code-scan.png')}
                  resizeMode="contain"
                  style={{ width: 35, height: 35, marginTop: 0 }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#365b6d',
              borderBottomWidth: 1,
              // marginLeft: '3%',
              // marginRight: '3%',
            }}
          />
          <ScrollView
            horizontal={true}

            style={{ height: '84%', backgroundColor: '#FAFAFA' }}
            shouldIndicatorHide={false}
            scrollEventThrottle={5}>
            <View
              style={{
                marginTop: '4%',
                paddingLeft: 10,
                paddingRight: 15,
                marginTop: 20,
                marginBottom: 10,
              }}>
              <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", backgroundColor: '#1D4355' }}>

                  {/* <View style={[styles.headers,{width:25}]} >
               
                </View> */}

                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>Quantity </Text>
                  </View>


                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>{selectedResponseHeader.F4141_TQCT} </Text>
                  </View>



                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>{selectedResponseHeader.F4141_LITM}</Text>
                  </View>

                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>{selectedResponseHeader.F4141_LOCN}</Text>
                  </View>

                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>{selectedResponseHeader.F4141_LOTN}</Text>
                  </View>

                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>{selectedResponseHeader.F4141_MCU}</Text>
                  </View>

                  <View style={styles.headers}>
                    <Text style={styles.textColorHeader}>{selectedResponseHeader.F4141_STUN}</Text>
                  </View>

                  {/* </View> */}
                </View>
                <FlatList
                  data={selectedResponseRowset}
                  renderItem={post => {
                    console.log('post', post)
                    return (
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', textAlign: 'center' }}>
                          {/* <TouchableOpacity style={[styles.loginBtn,{width:25}]}>
                      <Text style={{color:'white'}}>OK</Text>
                    </TouchableOpacity> */}

                          <View style={[styles.headers]}>
                          <TextInput  placeholder='Quantity' onChangeText={val=>{onQuantity(val)}} onFocus={() =>console.log("focus received" ) }
          onBlur={() => console.log("focus lost") } />
                          </View>

                          <View style={styles.headers}>
                            <Text style={styles.textColor}>{post.item.F4141_TQCT}</Text>
                          </View>

                          <View style={styles.headers}>
                            <Text style={styles.textColor}>{post.item.F4141_LITM}</Text>
                          </View>


                          <View style={styles.headers}>
                            <Text style={styles.textColor}>{post.item.F4141_LOCN}</Text>
                          </View>
                          <View style={styles.headers}>
                            <Text style={styles.textColor}>{post.item.F4141_LOTN}</Text>
                          </View>

                          <View style={styles.headers}>
                            <Text style={styles.textColor}>{post.item.F4141_MCU}</Text>
                          </View>
                          <View style={styles.headers}>
                            <Text style={styles.textColor}>{post.item.F4141_STUN}</Text>
                          </View>



                          <View>

                          </View>
                        </View>

                      </View>

                    );
                  }}
                />

                {/* <DataTable
            data={[ 
                { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
                { name: 'Muhammad Akif', age: 22, gender: 'male' },
                { name: 'Muhammad Umar', age: 21, gender: 'male' },
                { name: 'Amna Shakeel', age: 22, gender: 'female' },
                { name: 'Muhammad Ammar', age: 20, gender: 'male' },
                { name: 'Muhammad Moiz', age: 13, gender: 'male' }
            ]} // list of objects
            colNames={['name', 'age', 'gender']} //List of Strings
            colSettings={[
              { name: 'name', type: COL_TYPES.STRING, width: '40%' }, 
              { name: 'age', type: COL_TYPES.INT, width: '30%' }, 
              {name: 'gender', type: COL_TYPES.STRING, width: '30%'}
            ]}//List of Objects
            noOfPages={2} //number
            backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
            headerLabelStyle={{ color: 'grey', fontSize: 12 }} //Text Style Works
        /> */}



              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            borderBottomColor: '#365b6d',
            borderBottomWidth: 1,
            // marginLeft: '3%',
            // marginRight: '3%',
          }}
        />
        <View
          style={{ backgroundColor: '#0F2A37', padding: 7, bottom: 0, left: 0 }}>
          <TouchableHighlight
            style={[styles.transfer_buttonContainer]}
            onPress={() => this.onClickListener()}>
            <Text style={styles.transfer_Text}>Submit</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  );
}
