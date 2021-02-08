
import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../../component/HeaderAdmin';
import { FAB, Button, Card, Title, Paragraph,Divider  } from 'react-native-paper';
import colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
const Notification = ({navigation}) => {
    const [expanded, setExpanded] = React.useState(true);
  
    
    const LeftContent = props => <Ionicons  name="md-notifications-outline" size={30} />
    const rightContent = props => <Button   color="red">Delete</Button>
    
    return (  
        <View style={{flex:1}}>
           
            <Header title="Notifications"></Header>
            <FAB
            style={styles.fab}
            
            icon="plus" 
            onPress={() => navigation.navigate('AddNotification')}
        />
        <FlatList
        data={DATA}
        renderItem={()=>{
          return (
            <View>
               <Card>
                <Card.Title title="Title" subtitle="Description" left={LeftContent} right={rightContent} />
               
              
                
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
 
export default Notification

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
