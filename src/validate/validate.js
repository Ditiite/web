
const validate = values => {
    const error = {};

    if (!values.fullName) {
        error.fullName = 'Required'
    }

    if (!values.phoneNumber) {
        error.phoneNumber = 'Required'
    }

    if (!values.email) {
        error.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = 'Invalid email address'
    }

    if (!values.city) {
        error.city = 'Required'
    }
    
    return error;
}
// const validate = (values) => {
//     
//         name: /^[a-zA-Z]+/.test(name)
//             ? ''
//             : 'you can have only alphabetic characters',
//         phone: /[\d]{9}/.test(phone)
//             ? ''
//             : 'Please provide correct phone number!',
//         email: /[.?\w]+@[A-Za-z0-9]+.[A-Za-z]+/.test(email)
//             ? ''
//             : 'an invalid email address',
//         reEnterEmail: (email === reEnterEmail)
//             ? ''
//             : 'E-mails should match!',
//         address: /[a-zA-Z][\w'\s,-]+/.test(address)
//             ? ''
//             : 'an invalid address',
//         city: /[a-zA-Z][\w\s'-]+/.test(city)
//             ? ''
//             : 'an invalid city',
//         country: /[a-zA-Z][\w\s'-]+/.test(country)
//             ? ''
//             : 'an invalid country',
//         zip: /[\w-]{3,9}/.test(zip)
//             ? ''
//             : 'an invalid zip'
//     }

//     return errors;

export default validate;