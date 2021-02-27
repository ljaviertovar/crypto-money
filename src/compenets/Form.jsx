import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import useMoney from '../hooks/useMoney';
import useCryptocurrency from '../hooks/useCryptocurrency';

import Error from './Error'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`


const Form = ({setMoney, setCryptoMoney}) => {

    const [cryptoList, setCryptoList] = useState([]);

    const [error, setError] = useState(false);

    const MONEYS = [
        { code: 'USD', name: 'USA Money' },
        { code: 'MXN', name: 'Mexican Money' },
        { code: 'EUR', name: 'Europan Money' }
    ];

    const [money, SelectMoney] = useMoney('Choose your money', '', MONEYS);

    const [cryptoMoney, SelectCrypto] = useCryptocurrency('Choose your cryptocurrency', '', cryptoList);


    useEffect(() => {

        const consultAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const respMoneys = await axios.get(url);

            console.log(respMoneys);

            setCryptoList(respMoneys.data.Data);

        }

        consultAPI();

    }, []);

    const quoteCurrency = e => {
        e.preventDefault();

        if(money === '' || cryptoMoney === ''){
            setError(true);
            return;
        }

        setError(false);
        
        setMoney(money);
        setCryptoMoney(cryptoMoney);

    }

    return (

        <form
            onSubmit={quoteCurrency}
        >

        {error ? <Error message="All fields are required"/> : null}

            <SelectMoney />

            <SelectCrypto />

            <Button
                type="submit"
                value="Calculate"
            />
        </form>

    );
}

export default Form;