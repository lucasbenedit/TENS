import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../../services/api';

const App = () => {
  const [cep, setCep] = useState('');

  const handleCepSearch = () => {

     // https://viacep.com.br/ws/01001000/json/

const api = axios.create({
     baseURL: "https://viacep.com.br/ws/"
})

   


    Alert.alert('CEP Digitado', cep);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={text => setCep(text)}
        keyboardType="numeric"
      />
      <Button title="Buscar CEP" onPress={handleCepSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
