import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Role = ({navigation}) => {
    
    useEffect(() => {
        checkRole()
    }, [])
    const checkRole = async () =>{
        var role = await AsyncStorage.getItem('role')
        console.log(role)
        if(role == 'user'){
            navigation.navigate('Tabnavigator')
        }else if(role == 'runner'){
            navigation.navigate('RunnerNavigator')
        }else{
            
            navigation.navigate('AppAdminNavigator')
        }
    }
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Role

const styles = StyleSheet.create({})
