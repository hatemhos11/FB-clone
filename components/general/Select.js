import React from 'react'

const Select = ({options, lg, sm, ...props}) => {
    return (
        <select 
            className={`
                ${props.className}  ${lg && 'p-3 my-2'} ${sm && 'p-1 my-1 text-sm'} 
                relative w-full bg-transparent rounded-md
                outline-none border border-gray-200 placeholder:text-gray-400 focus:placeholder:text-gray-300 
            `}
        >
            {options.map(O => (
                <option key={Math.random()} value={O.value}>
                    {O.name}
                </option>
            ))}
        </select>
    )
}

export default Select