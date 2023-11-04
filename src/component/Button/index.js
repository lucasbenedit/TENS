import React from 'react';
import { View, text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.btncontainer}>
      <text style={styles.title}> COMPRAR</text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
     container:{
     alignItems:'center',
     justifyContent:'center'
     },
     btncontainer:{
      width:'90%',
      height:50,
      backgroundColor:'#17181a',
      borderRadius:5,
      marginVertical:'5%', 
    justifyContent:'center',
    alignItems:'center'   
     },
     title:{
      fontSize:17,
      color:'#FFF'
     },
     line:{
      borderWidth:1,
      borderBottomColor:'#DDD',
      marginVertical:'2%',
     }

});