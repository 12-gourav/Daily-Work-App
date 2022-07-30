import { View, Text,Platform,StatusBar,Image,SafeAreaView } from 'react-native'
import React from 'react';


const SkeltonLoader = () => {
  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,backgroundColor:"#fff"}}>
    <SafeAreaView>
        <View style={{justifyContent:"center",alignItems:"center",height:"100%"}}>
        <Image source={require("../assets/lo.gif")} style={{resizeMode:"contain",width:"100%",height:"100%"}} />
        </View>

 </SafeAreaView>
 </View>
   
  )
}

export default SkeltonLoader
