import React,{useContext} from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native'
import externalStyle from '../../styles/externalStyleSheet';
import { TextInput,Button } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from "../../navigation/AppAuth";
const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext); 
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState(''); 
    const [number, setNumber] = React.useState('');
    const [loader, setLoading] = React.useState(false)
    const Login = async () => { 
      console.log(url);
      var cfdate = moment().format('MMMM Do YYYY, h:mm:ss a');
     
      setLoading(true)
  
      try {
        const res = await fetch(`${url}login`, {
          method: 'POST',
          body: JSON.stringify({
                      name:name,
                      cdate:cfdate,
                      phone:number
                  }),
        })
        const json = await res.json() 
       
        if (json.status == '200') {
          console.log(json.data.u_role)
            await AsyncStorage.setItem('USER',JSON.stringify(json.data))
            await AsyncStorage.setItem('USER_TOKEN','123')
            await AsyncStorage.setItem('role',json.data.u_role)
            signIn('123')    
            Toast.show('Login Successful !',Toast.LONG);
        } else {
            Toast.show('Invalid credentials',Toast.LONG);
        }
      } catch (error) {
        Toast.show('Netwrok connection error',Toast.LONG);
      } finally {
        setLoading(false)
      }
    }
    return (
        <View style={styles.container}>
        <ImageBackground style={externalStyle.bgImage} source={require('../../assets/img/redbg.png')} >
          <Text style={[externalStyle.head,{marginLeft:20,marginTop:30}]}>Welcome</Text>
          <Text style={[externalStyle.subHead,{marginLeft:20}]}>Glad to meet you</Text>
          <View style={styles.bottombox}>
            <Text style={{fontSize:25,fontFamily:'Montserrat-Bold',marginTop:25}}>Sign In</Text>
            <ScrollView>
            <TextInput 
                label="Name"
                value={name} 
                onChangeText={text => setName(text)}
                autoCapitalize={false}
                style={externalStyle.input}
                />
                 {/* <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={externalStyle.input}
                /> */}
                <TextInput
                label="Phone Number"
                value={number}
                onChangeText={text => setNumber(text)}
                
              
                style={externalStyle.input}
                />
                 <Button loading={loader} style={{height:45,marginTop:hp('10%')}} labelStyle={{fontSize:20,fontFamily:'Montserrat-Medium',paddingVertical:1}} mode="contained" onPress={Login}>
                  CONTINUE
                </Button>
            </ScrollView>
          
               
                
          </View>
        </ImageBackground>
      </View>
    )
}

export default Login 

const styles = StyleSheet.create({
    container: {
      flex: 1
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
  });
  
