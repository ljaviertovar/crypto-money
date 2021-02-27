import React, {Fragment, useState} from 'react'

const useMoney = ({label, stateInit, options}) => {

 const [state, setState] = useState(stateInit);

    const Select = () => (
        <Fragment>
            <label>{label}: </label>
            <select>
            <option value="">-- Select --</option>
                {options.map(option =>(
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>
    )

    return [state, Select, setState];

}

export default useMoney;