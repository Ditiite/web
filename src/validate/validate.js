
const validate = values => {
    const error = {};
    if (!/^[a-zA-Z]+/.test(values.fullName) || (!values.fullName)) {
        error.fullName = 'You can have only alphabetic characters'
    }

    if (!/[\d]{9}/.test(values.phoneNumber)) {
        error.phoneNumber = 'Please provide correct phone number!'
    }

    if (!/[.?\w]+@[A-Za-z0-9]+.[A-Za-z]+/.test(values.email)) {
        error.email = 'Invalid email address'
    }

    if (!(values.email === values.reEnterEmail)) {
        error.reEnterEmail = 'E-mails should match!'
    }

    if (!/[a-zA-Z][\w'\s,-]+/.test(values.address)) {
        error.city = 'An invalid address'
    }

    if (!/[a-zA-Z][\w\s'-]+/.test(values.city)) {
        error.city = 'An invalid city'
    }

    if (!/[a-zA-Z][\w\s'-]+/.test(values.country)) {
        error.city = 'An invalid country'
    }

    if (!/[\w-]{3,9}/.test(values.zip)) {
        error.zip = 'An invalid zip'
    }

    return error;
}

export default validate;