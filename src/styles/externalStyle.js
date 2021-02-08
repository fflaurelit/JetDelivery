
import { StyleSheet } from 'react-native'
import color from '../constants/colors';


const externalStyle  = StyleSheet.create({
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
        marginTop:'5%'
    },
    circle:{
        width:50,
        height:50,
        backgroundColor:color.themeBlue,
        borderRadius:50,
        justifyContent:'center'
    },
    fontRegular:{
        fontFamily:'RobotoCondensed-Regular'
    },
    fontBold:{
        fontFamily:'RobotoCondensed-Bold'
    }
}) 
 export default externalStyle