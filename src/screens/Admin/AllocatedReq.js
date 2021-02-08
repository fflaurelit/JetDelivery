import React,{useEffect,useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,ActivityIndicator } from 'react-native';
import externalStyle from '../../styles/externalStyle';
import { FAB,List,Avatar, Button, Card, Title, Paragraph,Divider ,Searchbar } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';
import colors from '../../constants/colors';


const AllocatedReq = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [loader, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [dLoader, setDLoader] = useState(false)
  const [runnerList, setRunnerList] = useState([])
 
  
  useEffect(() => {
    GetRunner()
  }, [])
  const GetRunner = async () => {  
    setLoading(true)
    try {
      const res = await fetch(`${url}getRecordsAdminCompleted`, {
        method: 'POST',
        body: JSON.stringify({
          "table":"orders",
          "column":"o_status",
          "id":"allocated"
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
  const declinerequest = async(id) =>{
    setDLoader(true)
    try {
      const res = await fetch(`${url}updateOrderStatus`, {
        method: 'POST',
        body: JSON.stringify({
          "id":id,
          "status":"declined",
          "runner_id":"" 
      }),
      })
      const json = await res.json()
 
      if (json.status == '200') {
         console.log(json)   
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
    <View> 
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
                    <Title style={externalStyle.fontBold}>Runner : {item.r_phone}</Title>
                    <Paragraph style={[externalStyle.fontBold,{fontSize:16}]}>
                        <MCI name="motorbike" size={30} color={colors.themeBlue}></MCI>{item.r_name}
                    </Paragraph>
                    <Paragraph style={[externalStyle.fontRegular,{fontSize:16}]}>
                      <MCI size={23} color="green" name="arrow-up-box"></MCI> Pick : {item.o_pickup_add} {'\n'}<MCI size={23} color="red" name="arrow-down-box"></MCI> Drop : {item.o_drop_add}{'\n'}<MCI size={23} color="blue" name="dropbox"></MCI> Category : {item.o_category}</Paragraph>
                  </Card.Content>
                
                  <Card.Actions style={{justifyContent:'flex-end'}}>
                
                    <Button loading={dLoader} onPress={()=>{declinerequest(item.o_id)}} style={{borderColor:'red'}} mode="outlined" color="red">Decline</Button>
                  </Card.Actions>
                </Card>
                <Divider></Divider>
      </View>
        )}
        keyExtractor={item => item.o_id}
        refreshing={refresh}
        onRefresh={doFefresh}
      />
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

export default AllocatedReq;