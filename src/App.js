import React from 'react';
import styled from '@emotion/styled';

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

       

        
    </div>
</Container>
  );
}

export default App;
