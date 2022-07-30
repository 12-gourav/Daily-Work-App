import { View, Text, Platform, StatusBar, SafeAreaView, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {Avatar} from "react-native-paper";
import mime from "mime";
import {useDispatch} from "react-redux";
import { loadUser, updateUser } from '../Redux/action';
const UpdateProfile = () =>  {

  const Route = useRoute();
    const Navigaition = useNavigation();
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [avatar,setAvatar] = useState("");


  const handleImage = () =>{
    Navigaition.navigate("camera",{updateProfile:true})
  }



  const handleSubmit = async () => {
   try {
    if( !name){
      return alert("plz fill name  fields")
    }
   
    const form = new FormData();
    form.append("name",name);
    form.append("avatar",{
      uri:avatar,
      type:mime.getType(avatar),
      name:avatar.split("/").pop()
    })
  
    console.log(form);
  await dispatch(updateUser(form));
alert("Profile Update Successfully...");

dispatch(loadUser());
   
    
   } catch (error) {
    dispatch("clearError");
   }

  }
  
  
  useEffect(()=>{

    if(Route.params){
      if(Route.params.image){
        setAvatar(Route.params.image);
       
      }
    }
    
    },[Route,Navigaition])
    
  
  
  
    return (
      <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <SafeAreaView>
      
      <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
      <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
            <TouchableOpacity onPress={()=> Navigaition.goBack()}>
            <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
          
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{width:"100%",padding:20}}>
      <Text style={{fontWeight:"700",fontSize:28,textAlign:"center",color:"#85AFEE"}}>Update Profile</Text>
    </View>
    <View style={{alignItems:"center"}}>
      <TouchableOpacity onPress={handleImage}>
      {
        avatar ? <Avatar.Image size={120} source={{uri:avatar}}  style={{resizeMode:"contain",
    }} /> :  <Image source={require("../assets/register.png")}
         style={{resizeMode:"contain",width:100,height:100}}></Image>
      }
      </TouchableOpacity>
   
  
    <View style={{width:"100%",paddingLeft:25,marginTop:30,paddingRight:25}}>
  <Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>Username :-</Text>
  <View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
  <Image source={require("../assets/user.png")} style={{resizeMode:"contain",width:18,height:20,marginLeft:20}}></Image>
  <TextInput defaultValue={name} onChangeText={(e)=> setName(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your Name"></TextInput>
  </View>
  </View>
 
  <View style={{marginTop:40}}>
  <TouchableOpacity onPress={()=> handleSubmit()}>
    <Image source={require("../assets/updatebtn1.png")} style={{resizeMode:"contain",width:320,height:70}}></Image>
  </TouchableOpacity>
  </View>
  

    </View>
    </ScrollView>
  </LinearGradient>
  
      </SafeAreaView>
    
    </View>
    )
  }

export default UpdateProfile