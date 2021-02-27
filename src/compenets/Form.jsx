import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import useMoney from '../hooks/useMoney';
import useCryptocurrency from '../hooks/useCryptocurrency';

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


const Form = () => {

    const [cryptoList, setCryptoList] = useState([]);

    const MONEYS = [
        {code: 'USD', name: 'USA Money'},
        {code: 'MXN', name: 'Mexican Money'},
        {code: 'EUR', name: 'Europan Money'}
    ];

    const [money, SelectMoney] = useMoney('Choose your money', '', MONEYS);

    const [cryptocurrency, SelectCrypto] = useCryptocurrency('Choose your cryptocurrency', '', cryptoList);

    
    useEffect(() => {

    const consultAPI = async () => {

        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

        const result = await axios.get(url);

        setCryptoList(result.data.Data);

    }

    consultAPI();

}, []);

    return (

        <form>

            <SelectMoney/>

            <SelectCrypto/>

            <Button
                type="submit"
                value="Calculate"
            />
        </form>

    );
}

export default Form;