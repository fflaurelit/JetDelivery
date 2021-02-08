import React from 'react'
import { StyleSheet,View,Text,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import externalStyles from  '../../styles/externalStyleSheet';
import colors from  '../../constants/colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Onboarding = ({navigation}) => {
  const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Jet  delivery on demand packages in\nyour nearby locations.',
      image: require('../../assets/img/logo.png'),
      imageStyle:styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../assets/img/onboarding1.png'),
      imageStyle:styles.bigimage,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptionsLorem ipsum bla bla bla',
      image: require('../../assets/img/onboarding1.png'),
      imageStyle:styles.bigimage,
      backgroundColor: '#22bcb5',
    }
  ];
    const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
         <Image style={item.imageStyle} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
       
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const _onDone = () =>{
    navigation.navigate('Login')
  }
  const renderNextButton = () =>{
    return (
      <View style={{marginVertical:hp('2%'),borderRadius:5,width:100,height:40,backgroundColor:colors.themeColor,alignSelf:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:'Montserrat-Medium',color:'#fff',fontSize:20,alignSelf:'center'}}>Next</Text>
      </View>
    )
  }
  const renderSkip = () =>{
    return(
      <Text style={{marginBottom:30,fontFamily:'Montserrat-Medium',color:'grey',fontSize:20,alignSelf:'center'}}>SKIP</Text>

    )
  }
 const _renderDoneButton = () =>{
  return(
    <Text style={{marginVertical:hp('7%'),fontFamily:'Montserrat-Medium',color:'grey',fontSize:20,alignSelf:'center'}}>DONE</Text>

  )
 }
  
  return (
    <AppIntroSlider onSkip={_onDone} onDone={_onDone} renderDoneButton={_renderDoneButton} renderSkipButton={renderSkip} renderNextButton={renderNextButton} activeDotStyle={{backgroundColor:colors.themeColor}} showDoneButton={true}  showSkipButton={true} bottomButton={true} renderItem={_renderItem} data={slides} />
  )
}

export default Onboarding

const styles = StyleSheet.create({
  image:{
    width:250,
    height:250,
    alignSelf:'center',
    marginTop:hp('10%')
  },
  bigimage:{
    width:300,
    height:300,
    alignSelf:'center',
    marginTop:'15%'
  },
  title:{
    fontFamily:'Montserrat-Bold',
    alignSelf:'center',
    fontSize:hp('5%'),
    marginTop:hp('3%')
  },
  text:{
    fontFamily:'Montserrat-Medium',
    textAlign:'center',
    fontSize:hp('2.5%'),
    paddingVertical:10
  },
 
  slide:{
    elevation:3,
    height:'79%',
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
    backgroundColor:'#fff'
    
  }
})


// import React from 'react';
// import { StyleSheet,View,Text,Image } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const styles = StyleSheet.create({
//   image: {
//     width: 320,
//     height: 320,
//   }
// });

// const slides = [
//   {
//     key: 'somethun',
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('../../assets/img/logo.png'),
//     imageStyle: styles.image,
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 'somethun-dos',
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('../../assets/img/onboarding1.png'),
//     imageStyle: styles.image,
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 'somethun1',
//     title: 'Rocket guy',
//     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//     image: require('../../assets/img/onboarding1.png'),
//     imageStyle: styles.image,
//     backgroundColor: '#22bcb5',
//   }
// ];

// export default class App extends React.Component {
//   _renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Image source={styles.image} />
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   }
//   render() {
   
//       return  <AppIntroSlider showDoneButton={true}  showSkipButton={true} bottomButton={true} renderItem={this._renderItem} data={slides} />;
    
//   }
// }