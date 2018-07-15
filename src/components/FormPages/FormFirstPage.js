import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validate/validate';
import renderField from './renderFields';
import PropTypes from 'prop-types'

const FormFirstPage =  props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="info container">
            <h2>1. Personal Information</h2>
            <Field
                name="fullName"
                type="text"
                component={renderField}
                label="Full Name *" />
            <Field
                name="phoneNumber"
                type="text"
                component={renderField}
                label="Phone Number *" />
            <Field
                name="email"
                type="text"
                component={renderField}
                label="Email *" />
            <Field
                name="reEnterEmail"
                type="text"
                component={renderField}
                label="Re-enter email" />
            <Field
                name="address"
                type="text"
                component={renderField}
                label="Address *" />
            <Field
                name="city"
                type="text"
                component={renderField}
                label="City *" />
            <Field
                name="Sate"
                type="text"
                component={renderField}
                label="State" />
            <Field
                name="country/region"
                type="text"
                component={renderField}
                label="Country/Region*" />
            <Field
                name="zip"
                type="text"
                component={renderField}
                label="Zip/Postal code *" />
            <Field
                name="heardAboutUs"
                type="text"
                component="textarea"
                placeholder="How did you heard about us?" />

            <button type="submit" className="btn-next btn" disabled={pristine || submitting}
                //disabled={props.invalid}
                >
                Next
            </button>
        </form >
    )
}

FormFirstPage.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'portfolioForm', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FormFirstPage);
// const ReduxFormComponent = reduxForm({
//     form: 'portfolioForm',
//     destroyOnUnmount: false,
//     validate
// })(FormFirstPage);

// const mapStateToProps = state => {
//     return {
//         initialState: state.person,
//         myFormErrors: getFormSyncErrors('portfolioForm')(state)
//     };
// };

// const ConnectComponent = connect(mapStateToProps)(ReduxFormComponent);

// export default ConnectComponent;
