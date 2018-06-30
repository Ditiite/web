import React from 'react';

export function InputFields(props) {
    const {
        name,
        type,
        id,
        placeholder,
        value,
        handleChange
    } = props;

    return( 
        <label htmlFor={name}>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder} 
                value={value}
                onChange={handleChange}
            />
        </label>
    );
}