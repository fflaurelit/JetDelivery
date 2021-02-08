import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import Location from "../../assets/img/location.svg";
import Notification from "../../assets/img/notification.svg";
import colors from '../../constants/colors';
import Search from '../../assets/img/search-solid.svg';
import Filter from '../../assets/img/filter-solid.svg';
import Sync from '../../assets/img/sync-alt-solid.svg';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import Pending from '../App/Pending';
import Completed from '../App/Completed';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const initialLayout = { width: Dimensions.get('window').width };
const Booking = () => {
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Pending' },
    { key: 'second', title: 'Completed' },
  ]);
  const renderScene = SceneMap({
    first: Pending,
    second: Completed,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color:colors.themeColor, margin: 2,fontSize:15,fontFamily:'Montserrat-Medium', }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor:colors.themeColor }}
      style={{ backgroundColor: 'transparent',shadowOpacity:0,color:colors.themeColor }}
    />
  );
    return ( 
        <View style={{backgroundColor:'#F6F5FA',flex:1}}>
            <View style={styles.header}> 
                <View style={styles.colum}>
                    <Text style={styles.head}>Bookings</Text>
                   
                   
                     
                    
                </View>
                <View style={[{flexDirection:'column',width:'13%',paddingHorizontal:15,paddingVertical:5}]}>
                <Location width={wp('5%')}></Location>
                   
                </View>
                <View style={{flexDirection:'column',width:'13%',paddingHorizontal:15}}>
                <Notification width={wp('6%')}></Notification>
                </View>
            </View>
            <View style={styles.header}>
                <View style={{flexDirection:'column',width:'70%'}}>
                    <Text style={styles.head}>05</Text>
                </View>
                <View style={{flexDirection:'column',width:'30%'}}>
                <View style={{flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row',paddingVertical:10}}>
                <Search width={wp('5%')} />
                <Filter width={wp('5%')} />
                <Sync width={wp('5%')} />
                </View>
                </View>
                
                
                
            </View>
             <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
                />
            
        </View>
    )
}

export default Booking

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:50,
        backgroundColor:colors.themeColor,
        width:'100%',
        justifyContent:'space-evenly'
    },
   
    colum:{
        flexDirection:'column',
        width:'74%'
    },
    head:{
        color:'#fff',
        fontFamily:'Montserrat-SemiBold',
        padding:15,
        fontSize:RFValue(20)

    },
   
})
