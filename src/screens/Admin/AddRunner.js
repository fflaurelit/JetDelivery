import React,{useState} from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { TextInput,Button,Switch  } from 'react-native-paper';
import colors from '../../constants/colors';
import externalStyle from '../../styles/externalStyle';
import HeaderBack from '../../component/HeaderAdminBack';
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';
const AddRunner = () => {
    
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [active, setActive] = useState(true)
    const [loader, setLoading] = useState(false)
    const onToggleSwitch = (t) => {
      
        setActive(t) 
        setIsSwitchOn(!isSwitchOn);
    }
    const AddRunner = async () => { 
        
		setLoading(true)
		try {
			const res = await fetch(`${url}addRunner`, {
				method: 'POST',
				body: JSON.stringify({
                    name:name,
                    email:email,
                    phone:phone,
                    password:password,
                    active:active,
                    address:address
                }),
			})
      const json = await res.json()
     
			if (json.status == '200') {
                setName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setAddress('');
                setActive(false)
                Toast.show('Runner added successfully',Toast.LONG);
			} else {
                Toast.show('Failed ! Try Again Later',Toast.LONG);
			}
		} catch (error) {
			Toast.show('Netwrok connection error',Toast.LONG);
			
		} finally {
			setLoading(false)
		}
	}
    return (
        <View style={externalStyle.container}>
            <HeaderBack title="ADD RUNNER"></HeaderBack>
            <ScrollView style={externalStyle.scrollconta}> 
            <TextInput
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
            mode='outlined' 
            style={externalStyle.input} 
            selectionColor={colors.themeBlue}
            />
             <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            mode='outlined' 
            style={externalStyle.input}
            selectionColor={colors.themeBlue}
            />
            <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            mode='outlined' 
            style={externalStyle.input}
            selectionColor={colors.themeBlue}
            />
             <TextInput
            label="Phone"
            value={phone}
            onChangeText={text => setPhone(text)}
            mode='outlined' 
            style={externalStyle.input}
            selectionColor={colors.themeBlue}
            />
             <TextInput
            label="Address"
            multiline={true}
            numberOfLines={4}
            value={address}
            onChangeText={text => setAddress(text)}
            mode='outlined' 
            style={externalStyle.input}
            selectionColor={colors.themeBlue}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:20}}>
                <Text style={{fontSize:20}}>Status</Text>
            <Switch value={isSwitchOn} onValueChange={(text)=>onToggleSwitch(text)} />
            </View>
            
             <Button style={{marginTop:10,backgroundColor:'#21405d'}} loading={loader}  mode="contained" onPress={AddRunner}>
                SUBMIT
            </Button>
            </ScrollView>
           
        </View>
    )
}

export default AddRunner

const styles = StyleSheet.create({})
 