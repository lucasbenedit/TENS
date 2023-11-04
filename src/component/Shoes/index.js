import React from 'react';
import { View, Text, TouchableOpacity, image, StyleSheet } from 'react-native';


export default function Shoes(props) {

function filterDesc(desc) {
   if(desc.length < 27){
    return desc;
   }
   return'${desc.substring(0, 23)}...';

}


 return (
  <TouchableOpacity style={styles.container} onPress={props.onClick}>
   <image
    source={props.img}
    style={styles.shoesImg}
   />
   <text style={styles.shoesImg}> 
    {filterDesc(props.childrem)}
   </text>
   <view opacity={0.4}>
   <text style={styles.shoesImg}> {props.cost}</text>
   </view>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:'2%',
    alignItems:'center',
    justifyContent: 'center',
  },
  shoesImg:{
    width:175,
    height:175
  },
  shoesText:{
    fontSize: 16 
  }
});