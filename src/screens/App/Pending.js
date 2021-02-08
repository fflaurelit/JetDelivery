import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import { Button } from "react-native-paper";

import Start from '../../assets/img/start.svg';
import End from '../../assets/img/end.svg';
import Ion from 'react-native-vector-icons/Ionicons';
import GreenBox from '../../assets/img/GreenBox.svg';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
        id: 'bd7acbea-cb1-46c2-aed5-3ad53abb28ba',
        title: 'First Itm',
      },
   
  ];
const Pending = () => {
    return ( 
        <View style={{backgroundColor:'#F6F5FA',paddingBottom:10}}>
            
           
            <FlatList
                data={DATA}
                renderItem={({item})=>(
                    <View style={styles.card}>
                        <View style={styles.topRow}>
                            
                            <Ion name="ios-book" color="#D2D2D2" size={40}></Ion>
                            <Text>
                                <Text style={styles.type}>Books & Staionary {'\n'}</Text>
                                <Text style={styles.date}>27 Jan 2021 at 4:20 PM</Text>
                            </Text>
                            <Text style={styles.price}>$25.00</Text>
                        </View>
                        <View style={styles.middle}>
                            <Start width="60"></Start>
                            <Text style={{marginLeft:10}}>
                                <Text style={styles.time}>Picked at 3:20 PM {'\n'}</Text>
                                <Text style={styles.loc}>552, winter street, Spring  Town</Text>
                            </Text>
                        </View>
                        <View style={[styles.middle,{borderBottomWidth:3,borderColor:'#EFEFEF'}]}>
                            <End width="60" />
                            <Text style={{marginLeft:10}}>
                                <Text style={styles.time}>Delivered at 4:20 PM{'\n'}</Text>
                                <Text style={styles.loc}>552, winter street, Spring Town</Text>
                            </Text>
                        </View>
                        <View style={[styles.middle,{justifyContent:'space-between',height:30}]}>
                         
                          <GreenBox width="20"></GreenBox>
                            <Text style={[styles.type,{marginTop:10,marginLeft:'-25%'}]}>Delivered</Text>
                          
                    
                           
                            <Button labelStyle={{fontFamily:'Montserrat-SemiBold',paddingBottom:19,fontSize:10}} style={styles.btn} mode="contained">
                                Notes
                            </Button>
                        </View>
                    </View>

                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Pending

const styles = StyleSheet.create({
    
    btn:{
        height:25,
        borderRadius:3,
       
        marginTop:5
    },
    
    card:{
        width:'90%',
        elevation:1,
        minHeight:100,
        backgroundColor:'#fff',
        alignSelf:'center',
        padding:10,
        borderRadius:20,
       marginVertical:10
    },
    topRow:{
        flexDirection:'row',
        borderColor:'#EFEFEF',
        borderBottomWidth:2,
        height:60,
        justifyContent:'space-around',
        paddingVertical:10
    },
    price:{
        fontFamily:'Montserrat-SemiBold',
        textAlign:'right',
        fontSize:17,
        paddingVertical:5
    },
    type:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:RFValue(15) 
    },
    date:{
        fontFamily:'Montserrat-Medium',
        fontSize:RFValue(11)
    },
    middle:{
        flexDirection:'row',
        marginVertical:2
    },
    time:{
        fontFamily:'Montserrat-Medium',
        fontSize:13 
    },
    loc:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:13
    }
})
