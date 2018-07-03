import React from 'react';

export function RadioButtons(props) {
    const {
        name,
        type,
        id,
        value,
        handleChange,
        selectedDiscipline
    } = props;

    console.log("COMPARE:", selectedDiscipline, value);
    return(
        <label htmlFor={id} className={(selectedDiscipline === value)?'selected':''}>
            <input 
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                checked={selectedDiscipline === value}
            />

            {value}
        </label>        
    );
}