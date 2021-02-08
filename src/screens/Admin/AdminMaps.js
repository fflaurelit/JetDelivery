import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,FlatList} from 'react-native'
import MapView, { PROVIDER_GOOGLE ,Marker,Polyline} from 'react-native-maps';
import { Button } from "react-native-paper";
import ASD from 'react-native-vector-icons/Ionicons'
import MapViewDirections from 'react-native-maps-directions';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = "AIzaSyC7UvRLwAFLCeANZ2qwGgpGeJy2up6gT2Q";

const Maps = ({route,navigation}) => {


// const {plat,plong,dlat,dlong} = route.params;

    return (
        <View style={styles.container}>
              
            <View style={{height:'100%'}}>
            <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          scrollEnabled={true}
          zoomEnabled={true}
          moveOnMarkerPress={true}
          maxZoomLevel={18} 
         
          region={{
            latitude: 22.7355,
            longitude: 75.9074,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
             <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
  />
         {/* <Polyline
		coordinates={[
			{ latitude: 22.7355, longitude: -122.4351431 },
			{ latitude: 37.7896386, longitude: -122.421646 },
			{ latitude: 37.7665248, longitude: -122.4161628 },
			{ latitude: 37.7734153, longitude: -122.4577787 },
			{ latitude: 37.7948605, longitude: -122.4596065 },
			{ latitude: 37.8025259, longitude: -122.4351431 }
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/> */}
        </MapView>
       
      
            </View>
            
            
       
      </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
      
        
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      card:{
        flexDirection:'row',
        borderBottomWidth:1,
        height:50,
        justifyContent:'flex-start',
        width:'90%',
        alignSelf:'center'
      },
      address:{
        fontFamily:'Montserrat-Medium',
      }
})
