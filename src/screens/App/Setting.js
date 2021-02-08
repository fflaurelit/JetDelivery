import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Alert} from 'react-native'
import Profile from '../../assets/img/profile.svg'
import Info from '../../assets/img/info.svg'
import colors from '../../constants/colors';
import Credit from '../../assets/img/credit-card.svg'
import Map from '../../assets/img/map-book.svg'
import Contact from '../../assets/img/contact.svg'
import Star from '../../assets/img/star.svg'
import Share from '../../assets/img/share.svg'
import About from '../../assets/img/about.svg'
import Location from "../../assets/img/location.svg";
import Notification from "../../assets/img/notification.svg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from '../../navigation/AppAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Setting = ({navigation}) => {
    const {signOut} = useContext(AuthContext)
    const createTwoButtonAlert = async() =>{
        Alert.alert(
            "Are you sure you want to logout?",
            "",
            [
              {
                text: "Cancel",
                onPress: () => {
                    logOut()
                },
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }
    const logOut = async()=>{
        await AsyncStorage.clear()
        signOut()
    }
    return (
        <View style={{flex:1}}> 
        <View style={styles.header}>  
                <View style={styles.colum}>
                    <Text style={styles.head}>Settings</Text>
                </View>
                <View style={[{flexDirection:'column',width:'15%',justifyContent:'flex-end',alignItems:'center'}]}>
                <Location width={wp('5%')}></Location>
                   
                </View>
                <View style={{flexDirection:'column',width:'15%'}}>
                <Notification width={wp('6%')}></Notification>
                </View>
            </View>
            <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.lable}>Profile</Text>
                    <Profile width="25"></Profile>
                </View>
                <View style={styles.row}>
                    <Text style={styles.lable}>Saved Cards</Text>
                    <Credit width="25"></Credit>
                </View>
                <View style={styles.row}>
                    <Text style={styles.lable}>Save Address</Text>
                    <Map width="25" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.lable}>Contact Us</Text>
                    <Contact width="30" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.lable}>Rate Us</Text>
                    <Star width="33" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.lable}>Share App</Text>
                    <Share width="25" />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('About')} style={styles.row}>
                    <Text style={styles.lable}>About Us</Text>
                    <About width="25" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={()=>{createTwoButtonAlert()}}>
                <Text style={styles.lable}>Login</Text>
                    <MCI name="login-variant" color="#dedede" size={30} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
} 

export default Setting

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        width:'96%',
        borderBottomWidth:1,
        borderColor:'#CECED9',
        height:70,
        justifyContent:'space-between',
        padding:10,
        alignSelf:'center'
    },
    lable:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:RFValue(17),
        marginVertical:10
    },
    header:{
        flexDirection:'row',
        height:60,
        backgroundColor:colors.themeColor,
        width:'100%',
        justifyContent:'space-evenly'
    },
    colum:{
        flexDirection:'column',
        width:'70%'
    },
    head:{
        color:'#fff',
        fontFamily:'Montserrat-SemiBold',
        padding:15,
        fontSize:RFValue(20)

    }
})
