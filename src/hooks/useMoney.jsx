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

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useMoney = (label, stateInit, ops) => {

 const [state, setState] = useState(stateInit);

    const Selector = () => (
        <Fragment>
            <Label>{label}: </Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
            <option value="">-- Select --</option>
                {ops.map(op =>(
                    <option key={op.code} value={op.code}>{op.name}</option>
                ))}
            </Select>
        </Fragment>
    )

    return [state, Selector, setState];

}

export default useMoney;