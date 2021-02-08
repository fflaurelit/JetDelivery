
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import SIL from 'react-native-vector-icons/SimpleLineIcons'
import ION from 'react-native-vector-icons/Ionicons';

import CustomDrawer from './CustomDrawer'
import Home from '../screens/Admin/Home'
import RunnerList from '../screens/Admin/RunnerList'
import AddRunner from '../screens/Admin/AddRunner'
import AddNotification from '../screens/Admin/AddNotification'
import Notification from '../screens/Admin/Notification'
import Users from '../screens/Admin/Users'
import Revenue from '../screens/Admin/Revenue'
import RunnerHistory from '../screens/Admin/RunnerHistory'
import UserHistory from '../screens/Admin/UserHistory'
import AdminMaps from '../screens/Admin/AdminMaps'
import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator(); 

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
		<HomeStack.Screen name="Home" component={Home} />
		<HomeStack.Screen name="AdminMaps" component={AdminMaps} />
      
      
    </HomeStack.Navigator>
  );
}
const RunnerStack = createStackNavigator(); 

function RunnerStackNavigation() {
  return (
    <RunnerStack.Navigator screenOptions={{headerShown:false}}>
      <RunnerStack.Screen name="RunnerList" component={RunnerList} />
      <RunnerStack.Screen name="AddRunner" component={AddRunner} />
	  <RunnerStack.Screen name="RunnerHistory" component={RunnerHistory} />
	  
    </RunnerStack.Navigator>
  );
}
const NotiStack = createStackNavigator();

function NotiStackNavigation() {
  return (
    <NotiStack.Navigator screenOptions={{headerShown:false}}>
      <NotiStack.Screen name="Notification" component={Notification} />
      <NotiStack.Screen name="AddNotification" component={AddNotification} />
    </NotiStack.Navigator>
  );
}
const UserStack = createStackNavigator();

function userStackNavigator() {
  return (
    <UserStack.Navigator screenOptions={{headerShown:false}}>
      <UserStack.Screen name="Users" component={Users} />
      <UserStack.Screen name="UserHistory" component={UserHistory} />
    </UserStack.Navigator>
  );
}
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
	return ( 
   
<Drawer.Navigator
			drawerContentOptions={{ 
				activeTintColor: '#21405d',
				labelStyle: { fontSize: 17 }, 
			}} 
			initialRouteName='Home'
			drawerContent={(props) => <CustomDrawer {...props} />}>
					
			<Drawer.Screen
				name="Home"
				component={HomeStackNavigation}
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
				name="RunnerList"
				component={RunnerStackNavigation}
				options={{
					drawerIcon: ({ focused, color }) => {
						return <MCI name="format-list-bulleted" size={25} color='#21405d' />
					},
					drawerLabel: ({ focused, color }) => {
						return <Text style={styles.tesx}>Runner List</Text>
					},
				}}
			/> 
			<Drawer.Screen
				name="Notification"
				component={NotiStackNavigation}
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
				name="Users"
				component={userStackNavigator}
				options={{
					drawerIcon: ({ focused, color }) => {
						return <ION name="person-outline" size={25} color='#21405d' />
					},
					drawerLabel: ({ focused, color }) => {
						return <Text style={styles.tesx}>Users</Text>
					},
				}}
			/> 
			<Drawer.Screen
				name="Revenue" 
				component={Revenue}
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
