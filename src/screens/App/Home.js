import React,{useContext,useEffect} from 'react'
import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity} from 'react-native'
import colors from '../../constants/colors';
import Location from "../../assets/img/location.svg";
import Notification from "../../assets/img/notification.svg";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import Preview from '../../component/Preview';
import FlatListSlider from '../../component/FlatListSlider';
import AppContext from '../../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const data =    [
    { 
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a',
    },
    {
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:
        'Sample Description below ',
    },
  ] 
const Home = ({navigation}) => {
  const {user,setUser} = useContext(AppContext)
  useEffect(() => {
     getUserData()
  }, [])
  const getUserData = async()=>{
    let users = await AsyncStorage.getItem('USER')
    users = JSON.parse(users)
    setUser(users)
  }
    return (
        <View style={{backgroundColor:'#F6F5FA',flex:1}}>
            <View style={styles.header}>
                <View style={styles.colum}>
                    <Text style={styles.head}>Dashboard</Text>
                  
                    
                </View>
                <View style={[{flexDirection:'column',width:'15%',justifyContent:'flex-end',alignItems:'center'}]}>
                <Location width={wp('5%')}></Location>
                   
                </View>
                <View style={{flexDirection:'column',width:'15%'}}>
                <Notification width={wp('6%')}></Notification>
                </View>
            </View>
            <ScrollView>
            <FlatListSlider
            data={data}
            width={275}
            timer={4000}
            component={<Preview />}
            onPress={item => alert(JSON.stringify(item))}
            indicatorActiveWidth={40}
            contentContainerStyle={styles.contentStyle}
          />
   

         
          <TouchableOpacity onPress={()=>navigation.navigate('Contact',{
            type:'',
            lattitude:'',
            longitude:'',
            address:''
          })} style={{marginTop:'10%',flexDirection:'row',backgroundColor:'#fff',width:'100%',alignItems:'center'}}>
              
             <Image style={{marginLeft:'3%',alignSelf:'center',width:'98%',height:hp('15%'),resizeMode:'contain'}} source={require('../../assets/img/booknow.png')}></Image>
          </TouchableOpacity>
          <View style={{marginTop:'10%',paddingHorizontal:20,flexDirection:'row',backgroundColor:'#fff',alignItems:'center'}}>
             
             <Image style={{width:'100%',height:hp('25%'),resizeMode:'contain'}} source={require('../../assets/img/corona.png')}></Image>
          </View>
            </ScrollView>
            
             
         
        </View>
    )
}

export default Home

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
        width:'70%'
    },
    head:{
        color:'#fff',
        fontFamily:'Montserrat-SemiBold',
        padding:15,
        fontSize:RFValue(20)

    }
}) 
