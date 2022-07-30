import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux";




const Home = () => {

const Navigation = useNavigation();
const {user} = useSelector(state => state.auth);


let taskArray = [];

for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].completed == false) {
        taskArray.push(user.tasks[i]);
    }
}





  return (
    
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <SafeAreaView>
        <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
      
      <View style={{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between",marginTop:22,paddingLeft:22,paddingRight:22}}>
      <Image source={require("../assets/navbtn.png")} style={{width:40,height:40,resizeMode:"contain"}}></Image>
     <TouchableOpacity onPress={()=>Navigation.navigate("profile")}>
      <Image source={{uri:user.avatar.url}} style={{width:40,height:40,resizeMode:"contain",borderRadius:10}}></Image>
      </TouchableOpacity>
    </View>


{
    user.verified == false ? <TouchableOpacity style={{marginTop:50,marginBottom:53}} onPress={()=>Navigation.navigate("vaccount")}>
        <Text style={{color:"red",fontSize:20,fontWeight:"700",textAlign:"center"}}>
       Verify Your Account </Text></TouchableOpacity>:
<View style={{width:"100%",justifyContent:"center",alignItems:"center",marginTop:50}}>
        <Image source={require("../assets/banner.png")} style={{width:"100%",height:150,resizeMode:"contain"}}/>
        
    </View>
}

    

    <View style={{marginTop:10}}>
        
        <Text style={{fontWeight:"700",color:"#000",fontSize:20,marginLeft:39}}>Categories</Text>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",width:"100%",marginTop:30}}>
            <TouchableOpacity  onPress={()=> Navigation.navigate("worklist")}>
                <Image source={require("../assets/c1.png")} style={{width:65,height:65,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Navigation.navigate("tasklist")}>
                <Image source={require("../assets/c2.png")} style={{width:65,height:65,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> Navigation.navigate("clientlist")}>
                <Image source={require("../assets/c3.png")} style={{width:65,height:65,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Navigation.navigate("comming")}>
                <Image source={require("../assets/c4.png")} style={{width:65,height:65,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
        </View>
    </View>
  
<View style={{justifyContent:"center",alignItems:"center",marginTop:30,width:"100%"}}>
    <Text style={{width:"100%",paddingLeft:39,fontWeight:"700",color:"#000",fontSize:16}}>Your Pending Tasks</Text>
    <ScrollView style={{height:240}} showsVerticalScrollIndicator={false}>
    
    { taskArray[0] == null ?   <Image source={require("../assets/t2.png")} 
            style={{resizeMode:"contain",width:200,height:200,borderRadius:100}}></Image> :(
        <View style={{width:"100%",paddingLeft:22,paddingRight:22,marginTop:10}}>
      {
      
       taskArray.map((item)=>(

            <TouchableOpacity key={item._id} onPress={()=> Navigation.navigate("taskdetail",{id:item._id,item:item})}>
            <Card title={item.title} />
       </TouchableOpacity>
           

        ))
      }
     
      
  
    </View>
    )
}
    
    
    </ScrollView>
</View>


     
   
   </LinearGradient>
        </SafeAreaView>
  
   </View>
 

  )
}

export default Home