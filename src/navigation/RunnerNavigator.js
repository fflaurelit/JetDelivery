 
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import SIL from 'react-native-vector-icons/SimpleLineIcons'
import ION from 'react-native-vector-icons/Ionicons';

import RunnerDrawer from './RunnerDrawer'
import RunnerHome from '../screens/Runner/RunnerHome'
import RunnerNotification from '../screens/Runner/RunnerNotification'
import RunnerTotal from '../screens/Runner/RunnerTotal'
import { createStackNavigator } from '@react-navigation/stack';



const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
	return ( 
   
<Drawer.Navigator
			drawerContentOptions={{ 
				activeTintColor: '#21405d',
				labelStyle: { fontSize: 17 },
			}} 
			initialRouteName='Home'
			drawerContent={(props) => <RunnerDrawer {...props} />}>
					
			<Drawer.Screen
				name="Home"
				component={RunnerHome}
				options={{
					drawerIcon: ({ focused, color }) => {
						return <MCI name="home-outline" size={25} color='#21405d' />
					},
					drawerLabel: ({ focused, color }) => {
						return <Text style={styles.tesx}>Home</Text>
					},
				}}
			/> 
	
			<Drawer.Screen
				name="Notification"
				component={RunnerNotification}
				options={{
					drawerIcon: ({ focused, color }) => {
						return <ION name="notifications-outline" size={25} color='#21405d' />
					},
					drawerLabel: ({ focused, color }) => {
						return <Text style={styles.tesx}>Notification</Text>
					},
				}}
			/> 
		
			<Drawer.Screen
				name="Revenue" 
				component={RunnerTotal}
				options={{
					drawerIcon: ({ focused, color }) => {
						return <ION name="information-outline" size={25} color='#21405d' />
					},
					drawerLabel: ({ focused, color }) => {
						return <Text style={styles.tesx}>Total Revenue</Text>
					},
				}}
			/> 
		</Drawer.Navigator>

		 
	) 
}

const styles = StyleSheet.create({
	tesx:{
		fontFamily:'RobotoCondensed-Regular'
	}
})
export default DrawerNavigator
