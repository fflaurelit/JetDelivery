import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/Entypo'
import externalStyle from '../styles/externalStyle';
const Header = ({ title }) => { 
	const navigation = useNavigation()
	return (
		
		<View style={externalStyle.headerContainer}>
			<View style={{flexDirection:'column',width:'20%',justifyContent:'center'}}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				{/* <Image style={{width:40,height:30,alignSelf:'center',marginTop:10}} source={require('../assets/img/left-arrow.png')}></Image> */}
				<MCI style={{alignSelf:'center',marginTop:4}} name="chevron-left" color="#fff" size={30}></MCI>
			</TouchableOpacity> 
			</View>
			<View style={{flexDirection:'column',width:'80%'}}>
			<Text style={{fontSize:20,marginVertical:'4%',fontFamily:'RobotoCondensed-Regular',color:'#fff'}}>{title}</Text>
			</View>
				 
		</View> 
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		backgroundColor: 'transparent',
		paddingHorizontal: 0,
		justifyContent:'space-around',
		height:65,
		paddingVertical:8
	}
})

export default Header
