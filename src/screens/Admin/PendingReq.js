import React,{useEffect,useState,useRef} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,ActivityIndicator } from 'react-native';
import externalStyle from '../../styles/externalStyle';
import { Button, Card, Title, Paragraph,Divider ,Searchbar } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'; 
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';
import RBSheet from "react-native-raw-bottom-sheet";
import CheckboxList from 'rn-checkbox-list';
const PendingReq = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [loader, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [dLoader, setDLoader] = useState(false)
  const [runnerList, setRunnerList] = useState([])
  const [listitems, setItems] = useState([])
  const [selectedRunner, setSelectedRunner] = useState('')
  const [orderId, setOrderId] = useState('')
  const refRBSheet = useRef();
  const theme = 'red';
    const border = 'grey';
    useEffect(() => {
      GetRunner()
      GetAllRunner()
    }, [])
    const GetAllRunner = async () => {  
      setLoading(true)
      try {
        const res = await fetch(`${url}getRecords`, {
          method: 'POST',
          body: JSON.stringify({
            "table":"runners",
            "column":"",
            "id":"null"
        }),
        })
        const json = await res.json()
   
        if (json.status == '200') {
              
            let dat = json.data;
            let arr = []
            dat.forEach(element => {
              arr.push({id:element.r_id,name:element.r_name})
            });
          setItems(arr)
        } else {
                  Toast.show('Failed ! Try Again Later',Toast.LONG);
        }
      } catch (error) {
        Toast.show('Netwrok connection error',Toast.LONG);
        
      } finally {
        setLoading(false)
      }
    }
    const GetRunner = async () => {  
      setLoading(true)
      try { 
        const res = await fetch(`${url}getRecordsAdmin`, {
          method: 'POST',
          body: JSON.stringify({
            "table":"orders",
            "column":"o_status",
            "id":"pending"
        }),
        })
        const json = await res.json()
   
        if (json.status == '200') {
              
            setRunnerList(json.data)
          
        } else {
            Toast.show('Failed ! Try Again Later',Toast.LONG);
        }
      } catch (error) {
        Toast.show('Netwrok connection error',Toast.LONG);
        
      } finally {
        setLoading(false)
      }
    }
    const doFefresh = () =>{
      GetRunner()
    } 
    const changeStatus = async(id,status) =>{
      setDLoader(true)
      
      try {
        const res = await fetch(`${url}updateOrderStatus`, {
          method: 'POST',
          body: JSON.stringify({
            "id":status == 'allocated'?orderId:id,
            "status":status,
            "runner_id":selectedRunner
        }),
        })
        const json = await res.json()
   
        if (json.status == '200') {
          
          Toast.show('Request declined successfully.',Toast.LONG);
          GetRunner()
        } else {
          Toast.show('Failed ! Try Again Later',Toast.LONG);
        }
      } catch (error) {
        Toast.show('Netwrok connection error',Toast.LONG);
        
      } finally {
        setDLoader(false)
      }
    }
  return (
    <View style={{flex:1}}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      {loader && <ActivityIndicator size="large" color="#000"></ActivityIndicator>}
     <FlatList
        data={runnerList} 
        renderItem={({item})=>(
            <View>
              <Card>
              <Card.Title style={externalStyle.fontBold} title={item.u_name} subtitle={item.o_date_time} left={()=>(
                  <View style={externalStyle.circle}>
                  <Fontisto style={{alignSelf:'center'}} color="#fff"  name="delivery-dining" size={30} />
                </View>
              )} right={()=>(
                <View style={{paddingRight:10}}>
                  <Text style={externalStyle.fontBold}>Order Id : {item.o_id_custom}</Text>
                  <Text></Text>
                  </View> 
              )} />
              <Card.Content>
                <Title style={externalStyle.fontBold}>Phone : {item.u_phone}</Title>
                <Paragraph style={[externalStyle.fontRegular,{fontSize:16}]}>
                  <MCI size={23} color="green" name="arrow-up-box"></MCI> Pick : {item.o_pickup_add} {'\n'}<MCI size={23} color="red" name="arrow-down-box"></MCI> Drop : {item.o_drop_add}{'\n'}<MCI size={23} color="blue" name="dropbox"></MCI> Category : {item.o_category}</Paragraph>
              </Card.Content>
            
              <Card.Actions style={{justifyContent:'flex-end'}}>
              <Button onPress={()=>{
                setOrderId(item.o_id)
                refRBSheet.current.open()
              }} style={{borderColor:'green'}} color="green" mode="outlined">Allocate</Button>
                <Button onPress={()=>changeStatus(item.o_id,'declined')} style={{borderColor:'red'}} mode="outlined" color="red">Decline</Button>
              </Card.Actions>
              </Card>
              <Divider></Divider>
            </View>
          
        )}
        keyExtractor={item => item.o_id}
        refreshing={refresh}
        onRefresh={doFefresh}
      />
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
      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',padding:5}}>
             <Text style={{color:'#000',fontFamily:'Montserrat-Bold'}}>Runner List</Text>
             <Button style={{height:30,width:150}} labelStyle={{fontSize:12,fontFamily:'Montserrat-Bold',paddingVertical:1}} mode="text" onPress={()=>{
               refRBSheet.current.close()
               changeStatus('','allocated')
             }}>
                  ALLOCATE
                </Button>
         <Button style={{height:30,width:100}} labelStyle={{fontSize:12,fontFamily:'Montserrat-Bold',paddingVertical:1}} mode="text" onPress={()=>refRBSheet.current.close()}>
                  close
                </Button>
         </View>
         
          <CheckboxList
                theme={theme} 
                onChange={({ ids, items }) => {
                  if(items.length != 0){
                    setSelectedRunner(items[0].id)
                  }
                }}
                listItems={ listitems}
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
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PendingReq;