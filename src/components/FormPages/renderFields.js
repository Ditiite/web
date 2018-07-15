import React from 'react';

const renderFields = ({input, label, type, name, meta: {touched, error}}) => {
    return (
    <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
    )
};

export default renderFields;