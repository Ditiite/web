import React from 'react'
import { Field, reduxForm } from 'redux-form';
//import renderField from './renderField'
import { ExtraDesign } from '../ExtraDesign';
import { LocationCheck } from '../LocationCheck';
//import validate from '../../validate/validate';


const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;

const validate = values => {
    const error = {};
    if (!values.design) {
        error.design = 'Please select one of the desidn discipline!'
    }

}

const FormSecondPage = props => {
    const { handleSubmit, previousPage, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="container">
            <h2>2.Skills and location</h2>
            <p>Which is your primary design discipline?</p>
            <div className="radio-buttons label">
                <label htmlFor="research">
                    <Field name="design" id="research" component="input" type="radio" value="Design Research" />
                    {' '}
                    UX design
                </label>
                <label htmlFor="visual">
                    <Field name="design" id="visual" component="input" type="radio" value="Visual Design" />
                    {' '}
                    Front-end dev
                </label>
                <Field name="design" component={renderError} />
                <label htmlFor="ux">
                    <Field name="design" id="ux" component="input" type="radio" value="UX Design" />
                    {' '}
                    Front-end dev
                </label>
                <Field name="design" component={renderError} />
                <label htmlFor="dev">
                    <Field name="design" id="dev" component="input" type="radio" value="Front-end Dev" />
                    {' '}
                    Front-end dev
                </label>
                <Field name="design" component={renderError} />
            </div>

            <div className="checkbox-section">
                <ExtraDesign />
                <LocationCheck />
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
                </button>
                <button type="submit" className="next" disabled={pristine || submitting}>
                    Next
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'portfolioForm', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    //validate
})(FormSecondPage)