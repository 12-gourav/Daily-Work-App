import { View,Image } from 'react-native'
import React from 'react'

const Loader1 = (Props) => {
  return (
    <View style={{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#fff",height:"100%"}}>
                <Image source={require("../assets/t1.png")} 
            style={{resizeMode:"contain",width:300,height:300,borderRadius:200}}></Image>
            </View>
  )
}

export default Loader1