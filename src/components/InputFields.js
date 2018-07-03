import React from 'react';

export function InputFields(props) {
    const {
        name,
        type,
        id,
        placeholder,
        value,
        handleChange,
        handleFocus,
        error,
        isTouched
    } = props;
    
    console.log('isTouched.name', isTouched.name)

    return (
        <div id={id}>
            <label htmlFor={name}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleFocus}
                />
                {isTouched[name] &&
                    error.name &&
                    <p id="nameError" className="err-msg">
                        {error[name]}
                    </p>
                }
            </label>
        </div>
    );
}