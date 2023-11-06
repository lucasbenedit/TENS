import React from 'react';
import { View, text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';
import api from '../../services/api';
import App from '../../services/api';


export default function Detail({ navigation}) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })
 return (
   <ScrollView style={style.container}>
    <image
    source={require('../../assets/detail.png')}
    style={style}
    resizeMode="cover"
    />


<View>
  <View>
    <Text style={[style.title, { fontSize: 24 }]}>R$250,90</Text>
  </View>
  <View opacity={0.4}>
    <Text style={[style.title, { fontSize:  30 }]}>Nike Downshifter</Text>
  </View>

<view style={styles.dotContainer}>
<Dot color="#2379f4"/>
<Dot color="#fb6e53"/>
<Dot color="#ddd"/>
<Dot color="#000"/>
</view>

<View styles={{flexDirection: 'row',  width:'100%'}}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <SizeButton bgcolor="#17181a" color="#FFF">44</SizeButton>
    <SizeButton>40</SizeButton>
    <SizeButton>41</SizeButton>
    <SizeButton>42</SizeButton>
  </ScrollView>
</View>
 
<View style={styles.textContent}>
<text styles={styles.textTitle}>
  Nike Downshifter 10
</text>
<text style={styles.textContent}>
O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético
</text> 
<text style={styles.textList}>
   - Categoria: amortecimento
</text>
<text style={styles.textList}>
   - Material: Mesh
</text>
</View>

  <button /> 

 <App/>

  <view style={styles.line}/>
  
  <Footer/>

  </View> 
    </ScrollView>
   
    
  );
}

 const style = StyleSheet.create({
  container:{
   flex:1,
   width:'100%',
   backgroundColor:'#FFF'
  },
  image:{
    width: '100%',
  },
  title:{
    fontFamily:'Anton_400Regular',
    paddingHorizontal:'2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginHorizontal:'7%'
  }, 
  textContent:{
    fontSize:16,
    lineHeight:25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle:{
    fontSize:22,
    lineHeight:'2%'
  },
  textList:{
    fontSize:16,
    lineHeight:25,
  },
  line:{
    borderWidth:1,
    borderBottomColor:'DDD',
    marginVertical:'2',
   }
 });