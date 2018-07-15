import React from 'react'
import { reduxForm } from 'redux-form';
//import renderField from './renderField'

const FormCheckData = props => {
    const { handleSubmit, previousPage } = props;
    return (
        <form onSubmit={handleSubmit} className="container">
        <h2>Please check your data before submiting!</h2>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
                </button>
                <button type="submit" className="next">
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'portfolioForm', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(FormCheckData)