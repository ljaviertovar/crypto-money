import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quote = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    console.log(result)

    return ( 
        <ResultDiv>
            <Price>Price: <span>{result.PRICE}</span> </Price>
            <Info>Highest price of the day: <span>{result.HIGHDAY}</span> </Info>
            <Info>Lowest price of the day: <span>{result.LOWDAY}</span> </Info>
            <Info>Change last 24 hours: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span> </Info>
        </ResultDiv>
     );
}
 
export default Quote;