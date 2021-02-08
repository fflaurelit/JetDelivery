import React from 'react'
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import Location from "../../assets/img/location.svg";
import Notification from "../../assets/img/notification.svg";
import colors from '../../constants/colors';
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ant from 'react-native-vector-icons/AntDesign';
const About = () => {
    return (
        <View style={{backgroundColor:'#F6F5FA',flex:1}}>
             <View style={styles.header}>
                <View style={[{flexDirection:'column',width:'10%',justifyContent:'center',alignItems:'center'}]}>
                    <Ant name="arrowleft" size={25} color="#fff"></Ant>
                </View>
                <View style={styles.colum}>
                    <Text style={styles.head}>About Us</Text>
                </View>
                <View style={[{flexDirection:'column',width:'15%',justifyContent:'flex-end',alignItems:'center'}]}>
                    <Location width={wp('5%')}></Location>
                </View>
                <View style={{flexDirection:'column',width:'15%'}}>
                    <Notification width={wp('6%')}></Notification>
                </View>
            </View>
            <ScrollView>
            <View style={{flexDirection:'row',height:hp('25%'),backgroundColor:colors.themeColor}}>
                <Image source={require('../../assets/img/cloud.png')}  style={{resizeMode:'cover'}}></Image>

            </View>
            <Image style={{width:200,height:200,marginTop:'-27%',alignSelf:'center'}} source={require('../../assets/img/icon.png')}  ></Image>
            <Text style={{ fontFamily:'Montserrat-Regular',fontSize:30,textAlign:'center',paddingVertical:5}}>About Us</Text>
            <Text style={{ fontFamily:'Montserrat-Regular',fontSize:20,textAlign:'center',paddingVertical:5}}>Package delivery app</Text>
            <Text style={styles.text}>J.E.T Delivery is a third party delivery service founded and established in Humble, Tx. “Making Your Convenience Our Priority.” We are your local food runners in the Humble, Kingwood, and Atascocita area. Bringing your favorite cuisine dishes to your doorstep.{'\n'}{'\n'}DELIVERY HOURS:{'\n'}
Monday – Friday (11am – 3pm){'\n'}
Weekends: Closed</Text>
            <View
                style={{
                    borderBottomColor: '#D3D4D6',
                    borderBottomWidth: 1,
                    marginTop:20,
                    width:'85%',
                    alignSelf:'center'
                }}
                />
                <Text style={{color:'#2C2C30',fontFamily:'Montserrat-SemiBold',fontSize:18,textAlign:'center'}}>For Support Call at</Text>
                <View style={{border:1,width:180,borderColor:'#000',height:50,borderWidth:1,alignSelf:'center',justifyContent:'center',marginTop:20}}>
                <Text style={{color:'#2C2C30',fontFamily:'Montserrat-SemiBold',fontSize:25,textAlign:'center'}}>81-1000-2112</Text>
                </View>
            </ScrollView>
            
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:60,
        backgroundColor:colors.themeColor,
        width:'100%',
        justifyContent:'space-evenly'
    },
    colum:{
        flexDirection:'column',
        width:'60%'
    },
    head:{
        color:'#fff',
        fontFamily:'Montserrat-SemiBold',
        padding:15,
        fontSize:RFValue(20)

    },
    text:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
        textAlign:'center',
        marginTop:10
    }
})
