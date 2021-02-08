
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
// import SIL from 'react-native-vector-icons/SimpleLineIcons'
// import ION from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/App/Home';
import Booking from '../screens/App/Booking';
import Setting from '../screens/App/Setting';
import Book from "../assets/img/book.svg";
import HomeS from "../assets/img/home.svg";
import SettingS from "../assets/img/setting.svg";
import Contact from '../screens/App/Contact';
import BookingRed from '../assets/img/BookingRed.svg';
import SettingRed from '../assets/img/SettingRed.svg';
import HomeUn from '../assets/img/home-icon-silhouette.svg';
import Maps from '../screens/App/Maps';
import About from '../screens/App/About';
const HomeStack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      
     
       <HomeStack.Screen name="Home" component={Home} />
       <HomeStack.Screen name="Contact" component={Contact} />
      <HomeStack.Screen name="Maps" component={Maps} />
	  
    </HomeStack.Navigator>
  );
}
const SettingStack = createStackNavigator();

function SettingStackNavigation() {
  return (
    <SettingStack.Navigator screenOptions={{headerShown:false}}>
       <SettingStack.Screen name="Setting" component={Setting} />
       <SettingStack.Screen name="About" component={About} />
      {/* <SettingStack.Screen name="Maps" component={Maps} /> */}
	  
    </SettingStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
 

const Tabnavigator = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#D72018',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackNavigation}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size,focused }) => (
                focused ? <HomeS   width="30"></HomeS>:<HomeUn width="30" /> 
                
              ),
            }}
          />
          <Tab.Screen
            name="Booking"
            component={Booking}
            options={{
              tabBarLabel: 'Booking',
              tabBarIcon: ({ color, size,focused }) => (
                focused ? <BookingRed   width="30"></BookingRed> : <Book   width="30"></Book>
               
              )
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingStackNavigation}
            options={{
              tabBarLabel: 'Setting',
              tabBarIcon: ({ color, size ,focused}) => (
                focused ?<SettingRed width="30" />:<SettingS width="30"></SettingS>
              ),
            }}
          />
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
	
})
export default Tabnavigator
