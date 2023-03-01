import { BOLD_WEIGHT } from 'jest-matcher-utils';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({
  // container: {
  //     flex: 1,
  //     backgroundColor: "skyblue",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },

  //   image: {
  //     marginBottom: 40,
  //     width: "10%",
  //     height: 100,
  //   },

  //   inputView: {
  //     backgroundColor: "#FFC0CB",
  //     borderRadius: 30,
  //     width: "70%",
  //     height: 45,
  //     marginBottom: 20,

  //     alignItems: "center",
  //   },

  //   flatlist: {
  //     width: "70%",
  //     height: 45,
  //     marginBottom: 20,

  //     alignItems: "center",
  //   },

  //   TextInput: {
  //     height: 50,
  //     flex: 1,
  //     padding: 10,
  //     marginLeft: 20,
  //   },

  //   forgot_button: {
  //     height: 30,
  //     marginBottom: 30,
  //   },

  //   loginBtn: {
  //     width: "80%",
  //     borderRadius: 25,
  //     height: 50,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     marginTop: 40,
  //     backgroundColor: "#FF1493",
  //   },

  // });

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#031822',
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    width: 310,
    height: 55,
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputsActive: {
    height: 45,
    borderColor: '#1D4355',
    flex: 1,
    paddingLeft: 20,
    borderRadius: 5,
    borderWidth: 3,
  },
  inputs: {
    height: 45,
    borderColor: '#c7d0d5',
    flex: 1,
    paddingLeft: 20,
    borderRadius: 5,
    borderWidth: 3,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: '60%',
    borderRadius: 8,
    backgroundColor: '#031822',
  },
  transfer_buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,
    width: '60%',
    borderRadius: 8,
    backgroundColor: '#fff',
    
  },

  loginText: {
    paddingTop: 20,
    width: '30%',
    color: 'white',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  loginText1: {
    paddingTop: 10,
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText3: {
    color: '#ffff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transfer_Text: {
    color: '#0F2A37',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText2: {
    paddingTop: 10,
    color: '#1D4355',
    fontSize: 14,

    marginBottom: 25,
    alignSelf: 'center',
  },
  forgotText: {
    alignSelf: 'center',
    color: '#1D4355',
  },
  image: {
    alignSelf: 'center',
    width: '60%',
    height: 110,
    marginTop: '30%',
  },
  image1: {
    marginTop: 35,
    alignSelf: 'center',
    width: '30%',
    height: 40,
  },
  imagegif: {
    width: 350,
    height: 350,
  },
  text: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginTop: 0,
    width: 200,
  },
  logoutText: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginTop: 5,
    left: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setColorBlack: {
    color: 'black',
  },
  appButtonContainer: {
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 14,
    color: '#204A6C',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  activeTabTextColor: {
    color: '#eeaf3b',
  },
  tabTextColor: {
    color: '#ccc',
  },

  button: {
    marginVertical: 5,
  },

  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F2A37',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  btnCircleUp: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 18,
    shadowColor: '#365B6D',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.11,
    shadowRadius: 1.41,
  },
  imgCircle: {
    width: 30,
    height: 30,
  },
  img: {
    width: 30,
    height: 30,
  },
  container1: {
    flex: 1,
    backgroundColor: '#204A6C',
  },
  container_home: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailButton: {
    // width:'100%',
    backgroundColor: '#204A6C',
    borderRadius: 10,
    paddingVertical: 5,
    marginHorizontal: 35,
    paddingHorizontal: 25,
  },
  detailButtonText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 10,
    width: '50%',
  },
  textCard: {
    textAlign: 'center', // <-- the magic
    color: 'black',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    // marginTop: 0,
  },
  // text: {
  //   textAlign: 'center',
  //   margin: 10,
  //   height: 75,
  // },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  bottomNavigationView: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //new login screen design
  root: {
    height: '100%',
  },

  // item: {
  //   borderWidth: 4,
  //   borderColor: 'rgba(0,0,0,0.2)',
  //   height: 48,
  //   width: 48,
  //   borderRadius: 8,

  item: {
    height: '75%',
    // width: 410,
    borderRadius: 8,
    backgroundColor: '#0F2A37',
  },
  item1: {
    height: '70%',
    // width: 410,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: -190,
    zIndex: 1,
  },
  home_card: {
    margin: 15,
    width: 160,
    height: 200,
    backgroundColor: '#365B6D',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#52006A',
  },
  home_card_heder: {
    height: 90,
    // width: 160,
    justifyContent: 'center',
    backgroundColor: '#0F2A37',
    marginBottom: 10,
  },
  Profilehome_card_heder: {
    height: '34%',
    // width: 160
    backgroundColor: '#0F2A37',
  },
  home_card_hedertext: {
    color: '#fff',
    marginTop: 43,
    fontWeight: 'bold',
    fontSize: 23,
  },
  ProfilePagehome_card_hedertext: {
    color: '#fff',
    margin: 40,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 23,
  },
  // textAlign: 'center'
  rbsheetText: {
    fontSize: 14,
   
    color: '#1D4355',
    alignSelf: 'center',
    textAlign: 'center',
  },
  rbsheetSubHeadingText: {
    fontSize: 14,
    color: '#4D4C4B',
    fontWeight:'bold',
    // alignSelf: 'center',
    // textAlign: 'center',
    marginLeft:20,
    padding: 8,
  },
  rbsheetImage: {
    width: 45,
    height: 45,
    marginBottom: 5,
    alignSelf: 'center',
  },
  rbsheetCardViewBg: {
    backgroundColor: '#fafafa',
    borderColor: 'red',
    padding: 10,
    borderRadius: 8,
    width: '27%',
    elevation: 3,
    shadowColor: '#52006A',
  },
  ProfilePageheader: {
    backgroundColor: '#E36612',
  },
  ProfilePageheaderContent: {
    padding: 30,
    alignItems: 'center',
  },
  ProfilePageavatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#204A6C',
  },
  ProfilePagename: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: '10%',
  },
  ProfilePageuserInfo: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  ProfilePagebody: {
    backgroundColor: '#F2F1EC',
    height: '100%',
  },
  ProfilePageitem: {
    flexDirection: 'row',
  },
  ProfilePageinfoContent: {
    flex: 7,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  ProfilePageiconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  ProfilePageicon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  ProfilePageinfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#1D4355',
  },
  lt_text: {
    color: 'black',
    fontSize: 18,
    padding: 4,
  },

  lt_input1: {
    borderColor: '#f2f1ec',
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    height: 40,
  },
  lt_input: {
    borderColor: '#f2f1ec',
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    height: 40,
    marginRight: 10,
    width: 280,
  },
//vertical line in location transfer page
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#365b6d',
  },
  transfer_card: {
    
    backgroundColor: '#ffff',
    borderColor: 'red',
    padding: 10,
    paddingBottom:0,
    borderRadius: 8,
    width: '100%',
    // elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2
  },
  headers:{
    width:110,
    // backgroundColor:'#1D4355',
    height:50,
    flexDirection:'column',
    borderWidth:0.7,
    borderColor:'black'

  },
  textColor:{
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
  },

  textinput:{
    fontSize: 25,
   
    // color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    // backgroundColor:'red'
  },

  textColorHeader:{
    fontSize: 18,
   
    color: '#ffff',
    alignSelf: 'center',
    textAlign: 'center',
    // backgroundColor:'red'
  },
    loginBtn: {
      width: "20",
      borderRadius: 25,
      // height: 20,
      alignItems: "center",
      justifyContent: "center",
      // marginTop: 40,
      color:'#ffff',
      backgroundColor: "#1D4355",
    }

});