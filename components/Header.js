import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
function Header() {
  return (
    <View  style={style.header} >
    <Image
    source={require("../assets/imag.webp")}
    style={style.Logo}
    />
  </View>
  )
}

export default Header
const  style =StyleSheet.create({
header:{
    height:50,
    
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
padding:15,
backgroundColor:'white'
},
Logo:{
width:250,
width:'100%',
height:40
}
})