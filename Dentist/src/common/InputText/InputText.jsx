import React from 'react';

export const InputText = () => ({

    type,
    name,
    placeholder,
    changefunction,
    validatefunction

}) => {
    return (
        <>
            <input className='inputDesign'
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={changefunction}
                onBlur={validatefunction} />
        </>
    )
}
