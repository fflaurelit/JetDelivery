import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { TextInput,Button,Provider  } from 'react-native-paper';
import colors from '../../constants/colors';
import externalStyle from '../../styles/externalStyle';
import HeaderBack from '../../component/HeaderAdminBack';

const AddNotification = () => {
    const [text, setText] = React.useState('');
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [gender, setGender] = React.useState();
    const genderList = [
        { label: 'All', value: 'male' },
        { label: 'USER', value: 'female' },
        { label: 'RUNNERS', value: 'others' },
        { label: 'SPECIFIC RUNNERS', value: 'ss' },
      ];
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={externalStyle.container}>
            <HeaderBack title="SEND NOTIFICATION"></HeaderBack> 
            <ScrollView style={externalStyle.scrollconta}> 
          
             <TextInput
            label="Title"
            value={text}
            onChangeText={text => setText(text)}
            mode='outlined' 
            style={externalStyle.input}
            selectionColor={colors.themeBlue}
            />
             <TextInput
            label="Description"
            multiline={true}
            numberOfLines={4}
            value={text}
            onChangeText={text => setText(text)}
            mode='outlined' 
            style={externalStyle.input}
            selectionColor={colors.themeBlue}
            />
            
             <Button style={{marginTop:10}} loading={false}  mode="contained" onPress={() => console.log('Pressed')}>
                SUBMIT
            </Button>
            </ScrollView>
           
        </View>
    )
}

export default AddNotification

const styles = StyleSheet.create({})
 