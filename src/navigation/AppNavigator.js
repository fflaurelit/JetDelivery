import React from 'react'
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack'
import AuthContext, {defaultState, reducer, restoreToken} from './AppAuth';
import Login from '../screens/Auth/Login';
import Onboarding from '../screens/Auth/Onboarding';
import Maps from '../screens/App/Maps';
import Tabnavigator from './Tabnavigator';
import Otp from '../screens/Auth/Otp';
import AppAdminNavigator from '../navigation/AppAdminNavigator';
import RunnerNavigator from '../navigation/RunnerNavigator';
import Role from '../screens/Role';
const AppNavigator = () => {
	const [state, dispatch] = React.useReducer(reducer, defaultState);
	React.useEffect(() => {
		restoreToken(dispatch);
	  }, []); 
	  const authContext = React.useMemo(
		() => ({
		  signIn: (data) => {
			dispatch({type: 'SIGN_IN', token: data});
		  },
		  signOut: () => dispatch({type: 'SIGN_OUT'}),
		  signUp: (data) => {
			dispatch({type: 'SIGN_IN', token: data});
		  },
		}),
		[],
	  );
	 
	  if (state.isLoading) {
		return null;
	  }
	  const Stack = createStackNavigator();
	return (
		<AuthContext.Provider value={authContext}> 
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS, 
			}}>
				
			{state.userToken == null ? ( 
            <>
			<Stack.Screen name="Onboarding" component={Onboarding} />
			<Stack.Screen name="Login" component={Login} />
			 <Stack.Screen name="Otp" component={Otp} />
            </>
          	) : ( 
            <>
			<Stack.Screen name="Role" component={Role} />
				<Stack.Screen name="AppAdminNavigator" component={AppAdminNavigator} />
				<Stack.Screen name="Tabnavigator" component={Tabnavigator} />
				<Stack.Screen name="RunnerNavigator" component={RunnerNavigator} />
				
			</>)}
			 
		</Stack.Navigator>
		</AuthContext.Provider>
	
	)
}

export default AppNavigator
