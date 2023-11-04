import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

import shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
     <text style={styles.title}>VOCÊ TABMBEM PODE GOSTAR</text>
     <View style={{flexDirection:'row'}}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <view style={{marginHorizontal}}>
               <shoes img={require('../../assets/1.png')} const="250,90">
                    Nike Air Max Dia 
               </shoes>
           </view>
           <view style={{marginHorizontal}}>
               <shoes img={require('../../assets/5.png')} const="1.000,00">
                    Nike Epic React Flyknit 2 
               </shoes>
           </view>
           <view style={{marginHorizontal}}>
               <shoes img={require('../../assets/3.png')} const="650,90">
                    Nike Squidward Tentacles
               </shoes>
           </view>
       </ScrollView>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
title:{
     fontSize:24,
     fontFamily:'Anton_400Regular',
     marginVertical:'2%',
     paddingHorizontal:'2%'
}
})