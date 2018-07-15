import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validate/validate';

const FormThirdPage = props =>  {
    const { handleSubmit, previousPage, pristine, submitting } = props
    return (
        <form onSubmit={handleSubmit} className="portfolio container">
            <h2>3. Portfolio</h2>
            <p>
                Prove you're IBM's next great designer
                by showing us who you are. What you've done.
                How you think. Tell us your story.</p>
            <label htmlFor="link"></label>
            <Field
                type="link"
                name="link"
                id="link" 
                component="input" />
            <Field
                rows="5"
                cols="1"
                name="information"
                id="information"
                component="textarea" />
            <br />
            <button type="button" className="previous" onClick={previousPage}>
                Previous
                </button>
            <button type="submit" disabled={pristine || submitting} className="submit" >
                Submit 
            </button>
        </form>
    );
}

export default reduxForm({
    form: 'portfolioForm', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FormThirdPage)