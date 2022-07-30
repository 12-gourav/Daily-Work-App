import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux";
import Loader1 from "../components/Loader1";

const ClientList = () => {
    const Navigation = useNavigation();
    const {user} = useSelector(state => state.auth);
  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <SafeAreaView>
        <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
        <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
            <TouchableOpacity onPress={()=> Navigation.goBack()}>
            <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
          
        </View>
        <View>
            <Text style={{textAlign:"center",fontSize:28,color:"#85AFEE",fontWeight:"700",textShadowColor:"rgba(133, 175, 238, 0.35)",textShadowOffset:{
                width:3,height:4
            },textShadowRadius:8}}>Your Clients</Text>
        </View>
{
  user.client[0] == null ? <Loader1/> :  <View style={{width:"100%",paddingLeft:20,paddingRight:20,marginTop:30,flex:1,paddingBottom:10}}>
  <ScrollView  showsVerticalScrollIndicator={false}>
    {
      user.client.map((item)=>(
<TouchableOpacity key={item._id} onPress={()=> Navigation.navigate("clientdetail",{id:item._id,item:item})}>
<Card title={item.title}/>
</TouchableOpacity>
      ))
    }





  </ScrollView>
</View>
}
     



</LinearGradient>
        </SafeAreaView>
    </View>
  )
}
export default ClientList