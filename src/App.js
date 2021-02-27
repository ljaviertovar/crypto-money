import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Form from './compenets/Form';
import Quote from './compenets/Quote';

import imagen from './cryptomonedas.png';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {

  const [money, setMoney] = useState('');
  const [cryptoMoney, setCryptoMoney] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {
    const quoteCryptocurrency = async () => {
    
    if(money === '') return;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoMoney}&tsyms=${money}`;

    const resp = await axios.get(url);

    setResult(resp);
    
    }
   
    quoteCryptocurrency();

  }, [money, cryptoMoney])


  return (
    <Container>
    <div>
      <Image 
        src={imagen}
        alt="image crypto"
      />
    </div>
    <div>
        <Heading>Crypto-Money</Heading>

       <Form
         setMoney= {setMoney}
         setCryptoMoney= {setCryptoMoney}
       />

      <Quote
        result={result}
      />
        
    </div>
</Container>
  );
}

export default App;
