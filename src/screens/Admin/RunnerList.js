import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,ActivityIndicator,Alert,Linking, TouchableOpacity  } from 'react-native'
import Header from '../../component/HeaderAdmin';
import { FAB,List,Avatar, Button, Card, Title, Paragraph,Divider,Searchbar  } from 'react-native-paper';
import colors from '../../constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';

const RunnerList = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [loader, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [dLoader, setDLoader] = useState(false)
  const [runnerList, setRunnerList] = useState([])
  const onChangeSearch = query => setSearchQuery(query);
    const LeftContent = props => <Fontisto  name="person" size={30} />
    useEffect(() => {
      GetRunner()
    }, [])
    const GetRunner = async () => {  
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
    const deleteRunner = async(id) =>{
      setDLoader(true)
      try {
        const res = await fetch(`${url}deleteRecord`, {
          method: 'POST',
          body: JSON.stringify({
            "table":"runners",
            "column":"r_id",
            "id":id
        }),
        })
        const json = await res.json()
   
        if (json.status == '200') {
           console.log(json)   
          Toast.show('Record Deleted Successfully',Toast.LONG);
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
           
            <Header title="RUNNER"></Header> 
            <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
            <FAB
            style={styles.fab}
            
            icon="plus" 
            onPress={() => navigation.navigate('AddRunner')}
        />
        {loader && <ActivityIndicator size="large" color="#000"></ActivityIndicator>}
        
        <FlatList 
        data={runnerList}
        renderItem={({item,index })=>{
          return (
            <View>
               <Card>
                <Card.Title title={item.r_name} subtitle={item.r_email} left={LeftContent} />
                <Card.Content>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Phone : </Text><TouchableOpacity onPress={()=>Linking.openURL(`tel:${item.r_phone}`)}><Text style={{fontSize:20,fontWeight:'bold'}}>{item.r_phone}</Text></TouchableOpacity>

                  </View>
                  <Paragraph>Password : {item.r_password}{'\n'}Address : {item.r_address}</Paragraph>
                </Card.Content>
              
                <Card.Actions style={{justifyContent:'flex-end'}}>
                <Button mode="outlined">Update</Button>
                  <Button onPress={()=>{
                    Alert.alert(
                      "Are you sure you want to delete?",
                      "",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => {
                          deleteRunner(item.r_id)
                        } }
                      ],
                      { cancelable: false }
                    );
                  }}  mode="outlined" id loading={dLoader} color="red">Delete</Button>
                  <Button onPress={()=>navigation.navigate('RunnerHistory',{title:'RUNNER HISTORY'})} mode="outlined" color="green">History</Button>
                </Card.Actions>
              </Card>
              <Divider></Divider>
            </View>
          )
        }}
        keyExtractor={item => item.r_id}
        refreshing={refresh}
        onRefresh={doFefresh}
      />
        
      
          
        </View>
    )
}
 
export default RunnerList

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:colors.themeBlue,
       zIndex:20
      },
})
