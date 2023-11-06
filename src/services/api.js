import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const consultarCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setEndereco(response.data);
      })
      .catch((error) => {
        console.error('Erro ao consultar o CEP:', error);
      });
  };

  return (
    <div className="App">
      <h1>Consulta de CEP</h1>
      <div>
        <label htmlFor="cep">Digite o CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={handleCepChange}
        />
        <button onClick={consultarCep}>Consultar</button>
      </div>
      {endereco && (
        <div>
          <h2>Resultado:</h2>
          <p>CEP: {endereco.cep}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
