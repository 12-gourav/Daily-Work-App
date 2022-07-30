import { View, Text, Platform, StatusBar, SafeAreaView, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from "react-redux";
import { forgetPassword, loadUser, resetPassword } from '../Redux/action';
import { useRoute } from '@react-navigation/native';

const ResetPassword = () => {
const Route = useRoute();
    const Navigaition = useNavigation();
    const dispatch = useDispatch();
    const [otp,setOtp] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = async() => {
        try {
            if(!otp || !password){
                return alert("plz fill all the fields")
              }
         await dispatch(resetPassword(otp,password))
              alert("Your Password has been Successfully Changed....");
              dispatch(loadUser());

          
        } catch (error) {
            alert(error);
            dispatch({type:"clearError"});
            
        }
      
      }

  return(
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
    <Text style={{marginTop:0,fontWeight:"700",fontSize:25,color:"#85AFEE"}}>Reset Password</Text>
    </View>
    <View style={{width:"100%",paddingLeft:25,marginTop:70,paddingRight:25}}>
<Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>OTP :-</Text>
<View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
<Image source={require("../assets/lock.png")} style={{resizeMode:"contain",width:20,height:22,marginLeft:20}}></Image>
<TextInput defaultValue={otp} onChangeText={(e)=> setOtp(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your OTP"></TextInput>
</View>
</View>
<View style={{width:"100%",paddingLeft:25,marginTop:70,paddingRight:25}}>
<Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>New Password :-</Text>
<View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
<Image source={require("../assets/lock.png")} style={{resizeMode:"contain",width:20,height:22,marginLeft:20}}></Image>
<TextInput defaultValue={password} onChangeText={(e)=> setPassword(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your New Password"></TextInput>
</View>
</View>




    <View style={{paddingLeft:20,paddingRight:20,marginTop:50}}>
        <Text style={{fontSize:16,fontWeight:"400",lineHeight:20,textAlign:"center",color:"#6C6C6C"}}>
            OTP has benn sent Your register Gmail. If any condition
             the OTP is not shown in your
             Inbox then Please check the Spam folder.If you Have
              facing any issue go to help section</Text>
    </View>

<View style={{alignItems:"center",marginTop:40}}>
    <TouchableOpacity onPress={()=>handleSubmit()}>
    <Image source={require("../assets/v.png")} style={{resizeMode:"contain",width:300,height:200}}/>
    </TouchableOpacity>
 
</View>


 


    </ScrollView>
    </LinearGradient>
    </SafeAreaView>
    </View>
  )
}

export default ResetPassword