import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import externalStyle from '../../styles/externalStyleSheet';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { TextInput,Button } from 'react-native-paper';
import colors from '../../constants/colors';
import Ant from 'react-native-vector-icons/AntDesign';
const Otp = ({navigation}) => {
    return (
        <View style={{flex:1}}>
          <ImageBackground style={externalStyle.bgImage} source={require('../../assets/img/redbg.png')} >
          <Ant onPress={()=>navigation.goBack()} name="arrowleft" size={35} color="#fff" style={{marginLeft:20,marginTop:30}} ></Ant>
          {/* <Text style={[externalStyle.head,{marginLeft:20,marginTop:30}]}>Welcome</Text>
          <Text style={[externalStyle.subHead,{marginLeft:20}]}>Glad to meet you</Text> */}
          <View style={styles.bottombox}>
            <Text style={{fontSize:25,fontFamily:'Montserrat-Bold',marginTop:25}}>Code Verification</Text>
                <OTPInputView
                style={{width: '100%', height: 150}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
                <Button style={{marginTop:'5%',height:45}} labelStyle={{fontSize:20,fontFamily:'Montserrat-Medium',paddingVertical:1}} mode="contained" onPress={() => navigation.navigate('Tabnavigator')}>
                  SUBMIT
                </Button>
                
          </View>
        </ImageBackground>
          
        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
     
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
      underlineStyleBase: {
        width: 60,
        height: 60,
        borderWidth: 2,
        backgroundColor:'#efefef',
        borderRadius:6,
        color:'#000',
        
        fontSize:35
      },
     
      underlineStyleHighLighted: {
        borderColor: colors.themeColor,
      },
      bottombox:{
        width:'100%',
        height:'80%',
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        elevation:1,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        paddingHorizontal:'6%'
    }
})
