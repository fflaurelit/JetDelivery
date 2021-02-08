import React,{useContext,useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'

import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer'

import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import ANT from 'react-native-vector-icons/AntDesign'
import externalStyle from '../styles/externalStyle';
import AuthContext from '../navigation/AppAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomDrawer = (props) => {
	const {signOut} = useContext(AuthContext); 
	const Logout = async () => {
		console.log('ok')
        await AsyncStorage.clear();
        signOut();
      };
	return (
		
			<DrawerContentScrollView {...props}>
				<View style={{flexDirection:'row',justifyContent:'center',paddingVertical:20}}>
					<Image style={{width:100,height:100,alignSelf:'center'}} source={require('../assets/img/icon.png')}></Image>
					
				</View>
				<Text style={[externalStyle.fontBold,{alignSelf:'center',fontSize:25}]}>Admin</Text>
				<DrawerItemList {...props} /> 		
				<TouchableOpacity onPress={Logout} style={{flexDirection:'row',paddingLeft:20,marginTop:10}}>
				<MCI name="logout" size={30}></MCI>	
				<Text style={styles.tesx}>Logout</Text>
				</TouchableOpacity>		
			</DrawerContentScrollView>
		
	)
}

export default CustomDrawer

const styles = StyleSheet.create({
	tesx:{
		fontFamily:'RobotoCondensed-Regular',
		marginLeft:'9%',
		marginTop:'2%'
	}
})
