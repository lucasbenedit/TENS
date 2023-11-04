import React from 'react';
import { View, text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import Shoes from '../../component/Shoes';

export default function Home() {
const navigation = useNavigation();

 return (
   <View style={style.container}>
    <View style={style.header}>
      <image
      source={require('../../assets/banner.png')}
      style={style.image}
     />

     <View style={ style.textContainer}>
         <text style={style.text}>TINIS</text>
         <text style={[style.text, { color: '#DDD'}]}>*</text>
         <text style={[style.text, { color: '#DDD'}]}>MARCELINO</text>
         <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: "center"}}>
          <MaterialIcons
          name="filter-list"
          size={24}
          color="#000"
          />
         </TouchableOpacity>
     </View>
    </View>

   <view style={style.line} />

   <ScrollView>
    <text style={style.text}>LANÇAMENTOS</text>

    <view style={{ flexDirection:'row', justifyContent: 'space-around' }}>
     <Shoes img={require('../../assets/1.png')} const="R$250,90"onClick={()=> navigation.navigate('Detail')}>
      Nike air Max 
     </Shoes>
     <Shoes img={require('../../assets/2.png')} const="R$210,90">onClick={()=> navigation.navigate('Detail')}
      Nike Downshifyer 10 
     </Shoes>
      </view>

     <view style={{ flexDirection:'row', justifyContent: 'space-around' }}>
     <Shoes img={require('../../assets/3.png')} const="R$650,90"onClick={()=> alert('CLICOU')}>
      Nike Squidward Tentacles
     </Shoes>
     <Shoes img={require('../../assets/4.png')} const="R$310,90"onClick={()=> alert('CLICOU')}>
      Nike Epic React Flyknit 2
     </Shoes>
    </view>

    <view style={{ flexDirection:'row', justifyContent: 'space-around' }}>
     <Shoes img={require('../../assets/5.png')} const="R$1.000,00" onClick={()=> alert('CLICOU')}>
      Nike Joyride Run Flyknit 5
     </Shoes>
     <Shoes img={require('../../assets/6.png')} const="R$110,90"onClick={()=> alert('CLICOU')}>
      Nike air Max  5
     </Shoes>
    </view>

   </ScrollView>

   </View>
  );
}


const style = StyleSheet.create({
  container:{
 flex:1,
 width:'100%',
 backgroundColor: '#FFF',
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection:'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily:'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: 'D8d8d8',
    borderBottomWidth: 2,
  }
});