import { View, Text, Platform, StatusBar, SafeAreaView, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from "react-redux";
import { forgetPassword } from '../Redux/action';

const Forget = () => {
  const dispatch = useDispatch();
    const Navigaition = useNavigation();
    
    const [email,setEmail] = useState("");


  const handleSubmit = async() => {
    if(!email){
      return alert("Plz fill all the fields");
    }
   
     await dispatch(forgetPassword(email));
    Navigaition.navigate("resetPassword");

  
  }
  
  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <SafeAreaView>
    <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
        <ScrollView>
    <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
        <TouchableOpacity onPress={()=> Navigaition.goBack()}>
        <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
        </TouchableOpacity>
      
    </View>
   <View style={{flex:1,alignItems:"center"}}>
    <Text style={{marginTop:0,fontWeight:"700",fontSize:25,color:"#85AFEE"}}>Forget Password</Text>
    </View>
    <View style={{marginTop:40}}>
    <View style={{width:"100%",paddingLeft:25,marginTop:30,paddingRight:25}}>
<Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>Register Email :-</Text>
<View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
<Image source={require("../assets/lock1.png")} style={{resizeMode:"contain",width:18,height:20,marginLeft:20}}></Image>
<TextInput defaultValue={email} onChangeText={(e)=> setEmail(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your Register Email"></TextInput>
</View>
</View>


<View style={{width:"100%",alignItems:"center",marginTop:50}}>
    <TouchableOpacity onPress={  handleSubmit}>
    <Image source={require("../assets/forget.png")} style={{resizeMode:"contain",width:350,height:200}}></Image>
    </TouchableOpacity>


</View>

    </View>
    </ScrollView>
    </LinearGradient>
    </SafeAreaView>
    </View>
  )
}

export default Forget