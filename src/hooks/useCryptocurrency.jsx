import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectCrypto = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCryptocurrency = (label, stateInit, ops) => {

 const [state, setState] = useState(stateInit);

    const Selector = () => (
        <Fragment>
            <Label>{label}: </Label>
            <SelectCrypto
                onChange={e => setState(e.target.value)}
                value={state}
            >
            <option value="">-- Select --</option>
                
            </SelectCrypto>
        </Fragment>
    )

    return [state, Selector, setState];

}

export default useCryptocurrency;