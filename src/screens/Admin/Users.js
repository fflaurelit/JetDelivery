import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,ActivityIndicator} from 'react-native'
import Header from '../../component/HeaderAdmin';
import { FAB,List,Avatar, Button, Card, Title, Paragraph,Divider ,Searchbar } from 'react-native-paper';
import colors from '../../constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import url from '../../constants/url';
import Toast from 'react-native-simple-toast';

const Users = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState(''); 
    const [loader, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [userList, setUserList] = useState([])

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
            "table":"users",
            "column":"",
            "id":"null"
        }),
        })
        const json = await res.json()
   
        if (json.status == '200') {
              
                setUserList(json.data)
          
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
            "table":"users",
            "column":"u_id",
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
           
            <Header title="Users"></Header> 

            <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    {loader && <ActivityIndicator size="large" color="#000"></ActivityIndicator>}
        <FlatList
        data={userList}
        renderItem={({item})=>{
          return (
            <View>
               <Card>
                <Card.Title title={item.u_name} subtitle={item.u_email} left={LeftContent} />
                <Card.Content>
                  <Title>Phone : {item.u_phone}</Title>
                  <Paragraph>Address : {item.u_address}{'\n'}No Of Bookings : 2</Paragraph>
                </Card.Content>
              
                <Card.Actions style={{justifyContent:'flex-end'}}>
                <Button mode="outlined">Update</Button>
                  <Button onPress={()=>{deleteRunner(item.u_id)}} mode="outlined" color="red">Delete</Button>
                  <Button onPress={()=>navigation.navigate('UserHistory')}  mode="outlined" color="green">History</Button>
                </Card.Actions>
              </Card>
              <Divider></Divider>
            </View>
          )
        }}
        keyExtractor={item => item.u_id}
      />
        
      
          
        </View>
    )
}
 
export default Users

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
