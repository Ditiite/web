validate = (name, phone, city, email, reEnterEmail, address, country, zip) => {
    const error = {
        name: /^[a-zA-Z]+/.test(name)
            ? ''
            : 'you can have only alphabetic characters',
        phone: /[\d]{9}/.test(phone)
            ? ''
            : 'Please provide correct phone number!',
        email: /[.?\w]+@[A-Za-z0-9]+.[A-Za-z]+/.test(email)
            ? ''
            : 'an invalid email address',
        reEnterEmail: (email === reEnterEmail)
            ? ''
            : 'E-mails should match!',
        address: /[a-zA-Z][\w'\s,-]+/.test(address)
            ? ''
            : 'an invalid address',
        city: /[a-zA-Z][\w\s'-]+/.test(city)
            ? ''
            : 'an invalid city',
        country: /[a-zA-Z][\w\s'-]+/.test(country)
            ? ''
            : 'an invalid country',
        zip: /[\w-]{3,9}/.test(zip)
            ? ''
            : 'an invalid zip'
    }

    return error;
}

export default validate;