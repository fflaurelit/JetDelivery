import React,{useEffect} from 'react'
import { StatusBar,SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { AppProvider } from './src/context/AppContext'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import messaging from '@react-native-firebase/messaging';
const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
	  ...DefaultTheme.colors,
	  primary: '#D72018',
	  accent: '#f1c40f',
	},
  };
const App = () => {
	useEffect(() => {
		messaging().onMessage(meesage=>{
			//console.log('frm',meesage)
		})
	}, [])
	return (
		<AppProvider>
			<NavigationContainer>
				<StatusBar backgroundColor="#D72018" barStyle="light-content" />
				<PaperProvider theme={theme}>
				<SafeAreaView style={{flex:1}}>
				<AppNavigator />
				</SafeAreaView>
				</PaperProvider>
				
				
			</NavigationContainer>
		</AppProvider> 
	) 
} 

export default App 
