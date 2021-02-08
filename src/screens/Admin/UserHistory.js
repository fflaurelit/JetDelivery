
 import React from 'react';
 import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
 import externalStyle from '../../styles/externalStyle';
 import { FAB,List,Avatar, Button, Card, Title, Paragraph,Divider ,Searchbar  } from 'react-native-paper';
 import Fontisto from 'react-native-vector-icons/MaterialIcons';
 import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
 import ION from 'react-native-vector-icons/Ionicons'
 import HeaderBack from '../../component/HeaderAdminBack';
 const DATA = [
   {
     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
     title: 'First Item',
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     title: 'Second Item',
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     title: 'Third Item',
   },
 ]; 
 
 
 
 const UserHistory = () => {
     const [searchQuery, setSearchQuery] = React.useState('');
     const onChangeSearch = query => setSearchQuery(query);
   const LeftContent = props => (
     <View style={externalStyle.circle}>
       <ION style={{alignSelf:'center'}} color="#fff"  name="md-cloud-done-sharp" size={30} />
     </View>
   )
   const RightContent = props => (
     <View style={{paddingRight:10}}>
      <Text style={externalStyle.fontBold}>Order Id : 123456</Text>
      <Text></Text>
     </View>
   )
   const Item = ({ title }) => {
    
     return(
       <View>
         <Card>
     <Card.Title style={externalStyle.fontBold} title="Json Roy" subtitle="Today 12:25 AM" left={LeftContent} right={RightContent} />
     <Card.Content>
       <Title style={externalStyle.fontBold}>Phone : +971-8877-99808</Title>
       <Paragraph style={externalStyle.fontRegular}>
         <MCI size={20} color="green" name="arrow-up-box"></MCI> Pick : xyz, 123 treasure town {'\n'}<MCI size={20} color="red" name="arrow-down-box"></MCI> Drop : xyz, 123 treasure town{'\n'}<MCI size={20} color="blue" name="dropbox"></MCI>Category : Grocery
         {'\n'}<MCI size={20} color="black" name="calendar"></MCI> Date : 12-08-21 12:34 AM
         </Paragraph>
     </Card.Content>
   
    
   </Card>
   <Divider></Divider>
       </View>
     )
     
   };
   const renderItem = ({ item }) => (
     <Item title={item.title} />
   );
 
   return (
     <View>
         <HeaderBack title="USER HISTORY"></HeaderBack>
          <Searchbar
       placeholder="Search"
       onChangeText={onChangeSearch}
       value={searchQuery}
     />
       <FlatList
         data={DATA} 
         renderItem={renderItem}
         keyExtractor={item => item.id}
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
 
 export default UserHistory;