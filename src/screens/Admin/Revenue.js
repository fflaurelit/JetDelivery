
import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../../component/HeaderAdmin';
import { FAB,List,Avatar, Button, Card, Title, Paragraph,Divider  } from 'react-native-paper';
import colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import externalStyle from "../../styles/externalStyle";

import FA from 'react-native-vector-icons/FontAwesome';
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
  {
    id: '58694a0f-3da1-471f-bd96-15571e29d72',
    title: 'Third Item',
  },
];
const Revenue = ({navigation}) => {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <FA  name="usd" size={30} />
    const rightContent = props => <View style={{paddingHorizontal:20}}><Text style={[externalStyle.fontBold,{fontSize:20}]}>$50</Text></View>
    
    return (  
        <View style={{flex:1}}>
           
            <Header title="TOTAL REVENUE"></Header>
            <FAB
            style={styles.fab}
            
            icon="plus" 
            onPress={() => navigation.navigate('AddNotification')}
        />
        <Text style={[externalStyle.fontBold,{alignSelf:'center',fontSize:50,marginVertical:30}]}>$250</Text>
        <FlatList
        data={DATA}
        renderItem={(item)=>{
          return (
            <View>
               <Card>
                <Card.Title title='Runner Name'  left={LeftContent} right={rightContent} />
               
              
                
              </Card>
              <Divider></Divider>
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />
        
      
          
        </View>
    )
}
 
export default Revenue

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
