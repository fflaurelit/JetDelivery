import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

export default (Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[styles.videoPreview, active ? {} : {height: 205}]}
          source={{uri: item[imageKey]}}
        />
        <View style={{flexDirection:'row',minHeight:50,justifyContent:'center',paddingHorizontal:10,opacity:0.8,borderBottomRightRadius: 18,borderBottomLeftRadius: 18,width:'100%',backgroundColor:'#000',position:'absolute',bottom:0}}>
        <Text style={styles.desc}>{item.desc}</Text>
     </View>
      </View>
     
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  videoContainer: {
    width: 275,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor:'transparent'
  },
  videoPreview: {
    width: 275,
    height: 205,
    borderRadius: 18,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
    color:'#fff',
    fontFamily:'Montserrat-Medium'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});