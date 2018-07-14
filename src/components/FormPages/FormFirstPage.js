import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import validate from '../../validate/validate';
import renderField from './renderFields';
import { connect } from 'react-redux';


const FormFirstPage = ({ handleSubmit, props }) => {
    return (
        <form onSubmit={handleSubmit}>
            
            <Field
                name="firstName"
                type="text"
                component={renderField}
                label="first name" />
           
           
            <Field
                name="phone"
                type="text"
                component={renderField}
                label="phoneNumber" />
            <button type="submit" className="btn-next btn"
            // disabled={props.invalid}
            >
                Next
            </button>
        </form >
    )
}

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FormFirstPage)
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
