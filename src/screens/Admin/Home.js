import * as React from 'react';
import { View, StyleSheet, Dimensions ,Text} from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
 import PendingReq from './PendingReq';
 import AllocatedReq from './AllocatedReq';
 import CompletedReq from './CompletedReq';
 import Header from '../../component/HeaderAdmin';
 import colors from '../../constants/colors';
const FirstRoute = () => (
 <PendingReq></PendingReq>
);
 
const SecondRoute = () => (
  <AllocatedReq></AllocatedReq>
); 
const ThirdRoute = () =>( 
  <CompletedReq></CompletedReq>
)
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Pending' },
    { key: 'second', title: 'Allocated' },
    { key: 'third', title: 'Completed' },

  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor:colors.themeBlue }}
      style={{ backgroundColor: 'transparent',height:50 }}
      renderLabel={({ route, focused, color }) => (
          
        <Text style={focused ? { color:colors.themeBlue, margin: 8,fontFamily:'RobotoCondensed-Regular',fontSize:14 }:{ color:'#9F9F9D', margin: 8,fontFamily:'RobotoCondensed-Regular',fontSize:14 }}>
        {route.title}
      </Text> 
      )}
      
       
    />
  );
  return (
    <View style={{flex:1}}>
     <Header title="Home"></Header>
      <TabView

      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    /> 
    </View>
    
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});