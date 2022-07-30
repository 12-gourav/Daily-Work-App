import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const TaskMenue = () => {
  const Navigation = useNavigation();
  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <SafeAreaView>
    <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
    <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
            <TouchableOpacity onPress={()=> Navigation.goBack()}>
            <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
        </View>
<View style={{justifyContent:"center",alignItems:"center"}}>
  <TouchableOpacity onPress={()=> Navigation.navigate("addtask")}>
  <Image source={require("../assets/m1.png")} style={{width:320,height:200,resizeMode:"contain"}}></Image>
  </TouchableOpacity>
  <TouchableOpacity  onPress={()=> Navigation.navigate("addwork")}>
  <Image source={require("../assets/m2.png")} style={{width:320,height:200,resizeMode:"contain"}}></Image>
  </TouchableOpacity>
  <TouchableOpacity  onPress={()=> Navigation.navigate("addclient")}>
  <Image source={require("../assets/m3.png")} style={{width:320,height:200,resizeMode:"contain"}}></Image>
  </TouchableOpacity>

</View>






        </LinearGradient>
        </SafeAreaView>
        </View>
  )
}

export default TaskMenue