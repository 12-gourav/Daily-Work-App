import { View, Text, Platform, StatusBar, SafeAreaView, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux";


const Profile = () => {
    const Navigation = useNavigation();

    const {user} = useSelector(state=> state.auth);
    const d = new Date(user.createdAt);
    const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <SafeAreaView>
        <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
            <ScrollView>
        <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
            <TouchableOpacity onPress={()=> Navigation.goBack()}>
            <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
          
        </View>
       <View style={{flex:1,alignItems:"center"}}>
        <Text style={{marginTop:0,fontWeight:"700",fontSize:25,color:"#85AFEE"}}>Profile</Text>

       <Image source={{uri:user.avatar.url}} style={{resizeMode:"contain",width:150,height:150,marginTop:40,borderRadius:100,borderWidth:4,borderColor:"#85AFEE"}}></Image>

        
        <View style={{width:"100%",paddingLeft:20,paddingRight:20,marginTop:30}}>
            <Text style={{fontSize:16,fontWeight:"700",letterSpacing:0.5,marginBottom:5}}>Username :-</Text>
            <Text style={{fontSize:18,fontWeight:"700",color:"#85AFEE"}}>{user.name}</Text>
        </View>
        <View style={{width:"100%",paddingLeft:20,paddingRight:20,marginTop:30}}>
            <Text style={{fontSize:16,fontWeight:"700",letterSpacing:0.5,marginBottom:5}}>Gmail :-</Text>
            <Text style={{fontSize:18,fontWeight:"700",color:"#85AFEE"}}>{user.email}</Text>
        </View>
        <View style={{width:"100%",paddingLeft:20,paddingRight:20,marginTop:30}}>
            <Text style={{fontSize:16,fontWeight:"700",letterSpacing:0.5,marginBottom:5}}>Date of Joining :-</Text>
            <Text style={{fontSize:18,fontWeight:"700",color:"#85AFEE"}}>{date}</Text>
        </View>
        <View style={{marginTop:40}}>
            <TouchableOpacity onPress={()=> Navigation.navigate("updateprofile") }>
            <Image source={require("../assets/updatebtn1.png")} style={{resizeMode:"contain",width:300,height:100}}></Image>
            </TouchableOpacity>
          
        </View>
        
       </View>
       </ScrollView>
        </LinearGradient>
        </SafeAreaView>
    </View>
  )
}

export default Profile