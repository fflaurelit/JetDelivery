import React,{useState,useRef,useContext,useEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView,Pressable,TextInput,Platform,FlatList} from 'react-native'
import externalStyle from '../../styles/externalStyleSheet';
import { Button ,Dialog} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Pin from '../../assets/img/pin.svg';
import ThankYou from '../../assets/img/thakyoou.svg';
import Evil  from 'react-native-vector-icons/EvilIcons';
import color from '../../constants/colors';
import Edit from '../../assets/img/edit.svg';
import Ant from 'react-native-vector-icons/AntDesign';
import Shop from '../../assets/img/shop.svg';
import CheckboxList from 'rn-checkbox-list';
import RBSheet from "react-native-raw-bottom-sheet";
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../context/AppContext';
const data = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'House holds' },
  { id: 3, name: 'Electronic' },
  { id: 4, name: 'Black Panther' },
  { id: 5, name: 'Cloths' },
  { id: 6, name: 'Machines' }, 
  { id: 7, name: 'Kitchen Item' }
  
];
const theme = 'red';
    const border = 'grey';
const Login = ({route,navigation}) => {
    const {type,lattitude,longitude,address} = route.params;
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(!visible);
    const {user,setUser} = useContext(AppContext)
    const [notes, setNotes] = React.useState(''); 
    const [dropAdd, setDropAdd] = React.useState('Drop Location'); 
    const [pickAdd, setPickUpAdd] = React.useState('Pickup Location'); 
    const [listItem, setItems] = React.useState([]); 
    const [plattitude, setPickLattitude] = React.useState(''); 
    const [plongitude, setPickLongitude] = React.useState(''); 
    const [dlattitude, setDropLattitude] = React.useState(''); 
    const [dlongitude, setDropLongitude] = React.useState(''); 
    
    const refRBSheet = useRef();
    useEffect(() => {
     if(type == 'pickup'){
       setPickLattitude(lattitude);
       setPickLongitude(longitude);
       setPickUpAdd(address)
     }else if(type == 'drop'){
      setDropLattitude(lattitude);
      setDropLongitude(longitude);
      setDropAdd(address)
     }
    }, [])
    const Submit = async () => { 
      var category = '';
      listItem.forEach(element => {
        category = category+','+element.name
      });
      var cfdate = moment().format('MMMM Do YYYY, h:mm:ss a');
      setLoading(true)
      try {
        const res = await fetch(`${url}login`, {
          method: 'POST',
          body: JSON.stringify({
                  o_id_custom:'',
                  o_pickup_add:pickAdd,
                  o_drop_add:dropAdd,
                  o_pickup_lat:'',
                  o_pickup_lon:'',
                  o_drop_lon:'',
                  o_drop_lat:'',
                  o_category:category,
                  o_notes:notes,
                  o_user_id:user.u_id,
                  o_status:'pending',
                  o_date_time:cfdate
                  }),
        })
        const json = await res.json() 
       
        if (json.status == '200') {
          setVisible(true)
        } else {
          Toast.show('Unable to book request.Try again Later',Toast.LONG);
        }
      } catch (error) {
        Toast.show('Netwrok connection error',Toast.LONG);
        
      } finally {
        setLoading(false)
      }
      
    }
    return (
        <View style={styles.container}>
        <ImageBackground style={externalStyle.bgImage} source={require('../../assets/img/redbg.png')} >
        <Ant onPress={()=>navigation.goBack()} name="arrowleft" size={35} color="#fff" style={{marginLeft:20,marginTop:30}} ></Ant>

          <View style={styles.bottombox}>
            <Text style={{fontSize:20,fontFamily:'Montserrat-Bold',marginTop:25}}>Send Package</Text>
            <ScrollView>
                <Pressable onPress={()=>navigation.navigate('Maps',{type:'pickup'})} style={styles.locbox}>
                    <View style={{flexDirection:'column',width:'10%'}}>
                        <Pin width="20"></Pin>
                    </View>
                    <View style={{paddingVertical:10,paddingLeft:10,flexDirection:'row',width:'90%',borderBottomWidth:1,justifyContent:'space-between',borderColor:'#CECED9'}}>
                        <Text style={{color:color.textDesp,fontFamily:'Montserrat-Regular'}}>{pickAdd}</Text>
                        <Evil color="#D3D4D6" name="search" size={30}></Evil>
                    </View>
                </Pressable>
                <Pressable style={styles.locbox} onPress={()=>navigation.navigate('Maps',{type:'drop'})}>
                    <View style={{flexDirection:'column',width:'10%'}}>
                        <Pin width="20"></Pin>
                    </View>
                    <View style={{paddingVertical:10,paddingLeft:10,flexDirection:'row',width:'90%',borderBottomWidth:1,justifyContent:'space-between',borderColor:'#CECED9'}}>
                        <Text style={{color:color.textDesp,fontFamily:'Montserrat-Regular'}}>{dropAdd}</Text>
                        <Evil color="#D3D4D6" name="search" size={30}></Evil>
                    </View>
                </Pressable>
                <Pressable style={styles.locbox} onPress={()=>refRBSheet.current.open()}>
                    <View style={{flexDirection:'column',width:'10%'}}>
                        <Shop width="20"></Shop>
                    </View>
                    <View style={{paddingVertical:10,paddingLeft:10,flexDirection:'row',width:'90%',borderBottomWidth:1,justifyContent:'space-between',borderColor:'#CECED9'}}>
                        <Text style={{color:color.textDesp,fontFamily:'Montserrat-Regular'}}>Parcel Type</Text>
                        <Evil color="#D3D4D6" name="chevron-down" size={30}></Evil>
                    </View>
                </Pressable>
                <View style={{flexDirection:'row',marginTop:'10%',height:45,}}>
                <View style={{flexDirection:'column',width:'10%'}}>
                <Edit width="25" />
                </View>
                    
                <View style={{paddingVertical:0,paddingLeft:10,flexDirection:'row',width:'90%',borderBottomWidth:1,justifyContent:'space-between',borderColor:'#CECED9'}}>
                      <TextInput  style={{color:color.textDesp,fontFamily:'Montserrat-Regular'}} placeholder="Notes" style={{width:'100%'}}></TextInput>
                    </View>
                 
                </View>
                
          

                 <Button style={{height:45,marginTop:hp('6%')}} labelStyle={{fontSize:20,fontFamily:'Montserrat-Medium',paddingVertical:1}} mode="contained" onPress={() => Submit()}>
                  PAY $5 & CONTINUE
                </Button>
            </ScrollView>
            <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content style={{padding:0}}>
       
            <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
            <ThankYou width="150" height="150"></ThankYou>  
             
            </View>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
            <Text style={{color:'#4E4D56',fontSize:30,fontFamily:'Montserrat-SemiBold'}}>Thank You</Text>
        
            </View>
            <View style={{flexDirection:'row',width:'100%',fontFamily:'Montserrat-Regular',justifyContent:'center',color:'#4E4D56'}}>
            <Text style={{textAlign:'center',color:color.textDesp}}>Sit back and relax. Your express package {'\n'}is arriving in few minutes.</Text>
            
            </View>
            <View>
            <Button style={{alignSelf:'center',height:36,width:100,backgroundColor:'#D72018',marginTop:10}} labelStyle={{fontSize:15,fontFamily:'Montserrat-Medium',paddingVertical:1}} mode="contained" onPress={() => navigation.navigate('Home')}>
                  OK
                </Button>
            </View>
        </Dialog.Content> 
      </Dialog>
               
                
          </View>
          <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',padding:5}}>
             <Text style={{color:color.textDesp,fontFamily:'Montserrat-Bold'}}>Pakage Type</Text>
         <Button style={{height:30,width:100}} labelStyle={{fontSize:12,fontFamily:'Montserrat-Bold',paddingVertical:1}} mode="text" onPress={()=>refRBSheet.current.close()}>
                  close
                </Button>
         </View>
         
          <CheckboxList
            
                theme={theme}
               
                onChange={({ ids, items }) => {setItems(items)}}
                listItems={ [
                  { id: 1, name: 'Food'},
                  { id: 2, name: 'House holds'},
                  { id: 3, name: 'Electronic'},
                  { id: 4, name: 'Black Panther'},
                  { id: 5, name: 'Cloths' },
                  { id: 6, name: 'Machines' },
                  { id: 7, name: 'Kitchen Item' }
                  ]}
    
          checkboxProp={Platform.select({
            // Optional
            ios: {
              // iOS (supported from v0.3.0)
              boxType: 'square',
              tintColor: border,
              onTintColor: theme,
              onCheckColor: '#fff',
              onFillColor: theme
            },
            android: {
              tintColors: { true: theme, false: border }
            }
          })}
          
        />
      </View>
      </RBSheet>
        </ImageBackground>
      </View>
    )
}

export default Login 

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent:'center',
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        elevation:6
       
        
      },
      modalView: {
         width:'100%',
         height:'50%',
      
        backgroundColor: "white",
     
       
       position:'absolute',
       bottom:0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
    container: {
      flex: 1
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
    },
    locbox:{
        flexDirection:'row',
        width:'100%',
        height:45,
        marginTop:'10%'
    }
  });
  
