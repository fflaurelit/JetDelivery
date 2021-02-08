import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,FlatList} from 'react-native'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import { Button } from "react-native-paper";
import ASD from 'react-native-vector-icons/Ionicons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
      id: 'bd7acbea-cb1-46c2-aed5-3ad53abb28ba',
      title: 'First Itm',
    },
    {
      id: 'bd7acbea46c2-aed5-3ad53abb28ba',
      title: 'First Itm',
    },
];
const Maps = ({route,navigation}) => {

const [latitude, setlatitude] = useState(22.7029627)
const [longitude, setLongitude] = useState(75.8717833)
const {type} = route.params;
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setlatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
     Geocoder.init("AIzaSyC7UvRLwAFLCeANZ2qwGgpGeJy2up6gT2Q", {language : "en"});
  }, [])
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
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker 
          draggable={true}
          coordinate={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        
          onDragEnd={coordinate =>{
            console.log(coordinate.nativeEvent.coordinate)
            setlatitude(coordinate.nativeEvent.coordinate.latitude)
            setLongitude(coordinate.nativeEvent.coordinate.longitude)
          }}
          ></Marker>
        </MapView>
        <GooglePlacesAutocomplete
              placeholder='Search'
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log('feta',data);
                Geocoder.from("Colosseum")
                .then(json => {
                  var location = json.results[0].geometry.location;
                  console.log(location);
                })
                .catch(error => console.warn(error));
              }}
              query={{
                key: 'AIzaSyC7UvRLwAFLCeANZ2qwGgpGeJy2up6gT2Q',
                language: 'en',
              }}
            
              textInputProps={{
                InputComp: TextInput,
                leftIcon: { type: 'font-awesome', name: 'chevron-left' },
                errorStyle: { color: 'red' },
              }}
              
              styles={{container:{
                zIndex:100,
                
              },listView:{
                zIndex:100,
                fontFamily:'Montserrat-SemiBold',
              },textInput:{
                height:60,
                width:'95%',
                borderRadius:5,
                fontFamily:'Montserrat-SemiBold',
              }}}
            />
        <View style={{width:'100%',height:'30%',backgroundColor:'#fff',position:'absolute',bottom:0,elevation:1,borderTopLeftRadius:50,borderTopRightRadius:50,shadowOpacity:0.4,shadowColor:'grey',shadowOffset:1}}>
              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
              <Text style={{ fontFamily:'Montserrat-SemiBold',fontSize:20,padding:10}}>Saved Address</Text>
              <Button onPress={()=>{navigation.navigate('Contact',{
                type:type,
                lattitude:latitude,
                longitude:longitude,
                address:''
              })}} mode="text" labelStyle={{padding:10,fontFamily:'Montserrat-Medium'}}>SAVE & CONFIRM</Button>
              </View>
              <FlatList
                data={DATA}
                renderItem={({item})=>(
                    <View style={styles.card}>
                        <Text style={styles.address}>Rajwada Chowk near state bank of India Indore M.P</Text>
                    </View>

                )}
                keyExtractor={item => item.id}
            />
        </View>
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
