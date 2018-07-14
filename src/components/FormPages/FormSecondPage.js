import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../validate/validate';
//import renderField from './renderField'

const renderError = ({ meta: { touched, error }}) =>
    touched && error ? <span>{error}</span> : false;

const FormSecondPage = props => {
    const {handleSubmit, prevPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <Field name="design" component="input" type="radio" value="UX" />
                {' '}
                UX design
          </label>
            <label>
                <Field name="design" component="input" type="radio" value="frontEndDev" />
                {' '}
                Front-end dev
          </label>
            <Field name="design" component={renderError} />
            <div>
                <button type="button" className="previous" onClick={prevPage}>
                    Previous
                </button>
                <button type="submit" className="next">
                    Next
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FormSecondPage)