import React from 'react';

export function InputFields(props) {
    const {
        name,
        type,
        id,
        placeholder,
        value,
        handleChange,
        error
    } = props;

    return( 
        <div>
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

            <p id="nameError" className="err-msg">
                {error[name]}
            </p>
        </div>
    );
}