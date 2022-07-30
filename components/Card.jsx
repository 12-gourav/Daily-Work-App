import { View, Text,Image } from 'react-native'
import React from 'react'


const Card = (Props) => {
  return (

          <View style={{flexDirection:'row',backgroundColor:"#fff",height:50,width:"100%",
    marginTop:10,marginBottom:10,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#E5E5E5",borderWidth:1}}>
      <Image source={require("../assets/no1.png")} style={{resizeMode:"contain",width:15,height:15}}></Image>
      <Text style={{fontSize:15,fontWeight:"700",color:"#85AFEE",width:200,marginLeft:15,marginRight:15,textAlign:"center",overflow:"hidden"}} numberOfLines={1} ellipsizeMode='tail' >
       {Props.title}</Text>
      <Image source={require("../assets/no2.png")} style={{resizeMode:"contain",width:15,height:15}}></Image>
    </View>


  )
}

export default Card