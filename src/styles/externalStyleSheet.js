 
import { StyleSheet } from 'react-native'
import color from '../constants/colors';


const externalStyleSheet  = StyleSheet.create({
    headerContainer:{ 
        flexDirection:'row',
        height:50,
        backgroundColor:'#21405d'
    },
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    scrollconta:{
        paddingHorizontal:10,
    },
    input:{
        backgroundColor:'#fff',
        marginTop:'12%',
        color:'#000'
    },
    bgImage:{
        flex: 1,
        resizeMode: "cover",
    },
    tcontainer:{
        flex:1
    },
    head:{
        fontFamily:'Montserrat-SemiBold',
        color:'#fff',
        fontSize:30
    },
    subHead:{
        fontFamily:'Montserrat-Regular',
        color:'#fff',
        fontSize:15
    }
}) 
 export default externalStyleSheet