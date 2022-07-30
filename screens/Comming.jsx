import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Comming = () => {
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

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../assets/soon.png")} style={{width:300,height:300,resizeMode:"contain"}}></Image>
            <Text style={{fontWeight:"400",fontSize:16,textAlign:'justify',padding:10,color:"#595757",lineHeight:26}}>For patients, smartwatches can monitor your heart rate, sleep habits, and physical activity. Health Feature is the awesome feature which are comming very soon....</Text>
            <Text style={{marginTop:20,fontWeight:"300"}}>By :-  @CoolDeveloper</Text>
        </View>

</LinearGradient>
        </SafeAreaView>
    </View>
  )
}

export default Comming