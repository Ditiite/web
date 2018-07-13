import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
//import validate from './validation/validate';
//import renderField from './renderField';
import { connect } from 'react-redux';

const validate = (values, props) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'this field is required';
    }

    if (!/^\d{4,}$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'not a phone number';
    }

    return errors;
}

const FormFirstPage = ({ handleSubmit, props }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <Field
                name="firstName"
                type="text"
                component="input"
                label="first name" />
            <div style={{ color: 'red' }}>
                {props.myFormErrors.firstName}
            </div>
            <label htmlFor="phoneNumber">First Name</label>
            <Field
                name="phone"
                type="text"
                component="input"
                label="phoneNumber" />
            <button type="submit" className="btn-next btn"
            // disabled={props.invalid}
            >
                Next
            </button>
        </form >
    )
}

const ReduxFormComponent = reduxForm({
    form: 'portfolioForm',
    //destroyOnUnmount: false,
    validate
})(FormFirstPage);

const mapStateToProps = state => {
    return {
        initialState: state.person,
        myFormErrors: getFormSyncErrors('portfolioForm')(state)
    };
};

const ConnectComponent = connect(mapStateToProps)(ReduxFormComponent);

export default ConnectComponent;
