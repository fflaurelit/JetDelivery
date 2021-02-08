import React from 'react'
import { StyleSheet, View,Text,ImageBackground,ScrollView ,Image} from 'react-native'
import { TextInput,Paragraph, Dialog, Portal,Provider ,Button,Avatar } from 'react-native-paper';
import ThankYou from '../../assets/img/thakyoou.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import externalStyle from '../../styles/externalStyleSheet';
import Edit from '../../assets/img/edit.svg';
import Ant from 'react-native-vector-icons/AntDesign';
const Contact = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(!visible);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState(''); 
  const [number, setNumber] = React.useState('');
  const LeftContent = props => <TextInput.Icon {...props} icon="folder" />

    return (
        <View style={{flex:1}}> 
           <ImageBackground style={externalStyle.bgImage} source={require('../../assets/img/redbg.png')} >
           <Ant onPress={()=>navigation.goBack()} name="arrowleft" size={35} color="#fff" style={{marginLeft:20,marginTop:30}} ></Ant>
          <View style={styles.bottombox}>
            <Text style={{fontSize:25,fontFamily:'Montserrat-Bold',marginTop:25}}>Send Package</Text>
            <ScrollView>
            <TextInput
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                mode="outlined"
                left={<TextInput.Icon name="info" color={"#ff0000"} onPress={() => {}} />}
                style={externalStyle.input}
                />
                 <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                

                style={externalStyle.input}
                />
                <TextInput
                label="Phone Number"
                value={number}
                onChangeText={text => setNumber(text)}
                
              
                style={externalStyle.input}
                />
                 <Button style={{height:45,marginTop:hp('15%')}} labelStyle={{fontSize:20,fontFamily:'Montserrat-Medium',paddingVertical:1}} mode="contained" onPress={() => navigation.navigate('Otp')}>
                 PAY $5 & CONFIRM
                </Button>
            </ScrollView>
            <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
            <ThankYou width="200" height="200"></ThankYou>  
             
            </View>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
            <Text style={{color:'#4E4D56',fontSize:30,fontFamily:'Montserrat-SemiBold'}}>Thank You</Text>
        
            </View>
            <View style={{flexDirection:'row',width:'100%',fontFamily:'Montserrat-Regular',justifyContent:'center',color:'#4E4D56'}}>
            <Text style={{textAlign:'center'}}>Sit back and relax. Your express package {'\n'}is arriving in few minutes.</Text>
            
            </View>
            <View>
            <Button style={{alignSelf:'center',height:45,width:100,backgroundColor:'#D72018',marginTop:10}} labelStyle={{fontSize:20,fontFamily:'Montserrat-Medium',paddingVertical:1}} mode="contained" onPress={() => {}}>
                  OK
                </Button>
            </View>
        </Dialog.Content> 
      </Dialog>
    </Portal>
               
                
          </View>
        </ImageBackground>
          
           
      
  
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({

    containerStyle:{
        backgroundColor: '#fff',
         padding: 20
        },
        bottombox:{
          width:'100%',
          height:'80%',
          backgroundColor:'#fff',
          position:'absolute',
          bottom:0,
          elevation:1,
          borderTopEndRadius:30,
          borderTopStartRadius:30,
          paddingHorizontal:'6%'
      }

})
