import React, { Component } from 'react';

export class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: "",
            email: "",
            reEnterEmail: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zip: "",
            heardAboutUs: "",
            isTouched: {
                name: false,
                phone: false,
                email: false,
                reEnterEmail: false,
                address: false,
                city: false,
                country: false,
                zip: false
            }
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFocus = e => {
        const inputField = e.target.name;
        this.setState(prevState => ({
            isTouched: {
                ...prevState.isTouched,
                [inputField]: true
            }
        }));
    }

    handleSubmit = e => {
		e.preventDefault();
		e.target.reset();
        
        this.props.addData({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            reEnterEmail: this.state.reEnterEmail,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zip: this.state.zip,
            heardAboutUs: this.state.heardAboutUs
        });
    }

    handleChange(event){
        const target = event.target;

        switch(target.name) {
            case 'name':
                this.setState({
                    name: target.value
                });
                break;
            case 'phone':
                this.setState({
                    phone: target.value
                });
                break;
            case 'email':
                this.setState({
                    email: target.value
                });
                break;
            case 'reEnterEmail':
                this.setState({
                    reEnterEmail: target.value
                });
                break;
            case 'address':
                this.setState({
                    address: target.value
                });
                break;
            case 'city':
                this.setState({
                    city: target.value
                });
                break;
            case 'state':
                this.setState({
                    state: target.value
                });
                break;
            case 'country':
                this.setState({
                    country: target.value
                });
                break;
            case 'zip':
                this.setState({
                    zip: target.value
                });
                break;
            case 'heardAboutUs':
                this.setState({
                    heardAboutUs: target.value
                });
                break;
            default:
                 this.setState({ name: 'Please check your inputs!'})
        }
    }

    validate= (name, phone, city, email, reEnterEmail, address, country, zip ) => {
        const error = {
            name:  /^[a-zA-Z]+/.test(name)
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

    render() {
        const { name, phone, city, email, reEnterEmail, address, state, country, zip, heardAboutUs, isTouched } = this.state;
        const error = this.validate( name, phone, city, email, reEnterEmail, address, country, zip );

        return(
            <section className="info container">
                <form onSubmit={this.handleSubmit}>
                    <h2>1. Personal Information</h2>
                    <div className="first-container">
                        <div className="col-8">
                            <label htmlFor="name"></label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Full name *" 
                                className={error.name && isTouched.name ? 'invalid' : ''}
                                value={name}
                                onBlur={this.handleFocus}
                                onChange={this.handleChange}/>
                            {isTouched.name &&
                                error.name &&  <p id="nameError" className="err-msg">{error.name}</p>}

                            <label htmlFor="email"></label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email *" 
                                className={error.email && isTouched.email ? 'invalid' : ''}
                                value={ email }
                                onBlur={this.handleFocus}
                                onChange={this.handleChange}/>
                            {isTouched.email &&
                                error.email && <p id="emailError" className="error-message">{error.email}</p>}

                            <label htmlFor="email-again"></label>
                            <input 
                                type="email" 
                                id="email-again" 
                                name="reEnterEmail" 
                                placeholder="Re-enter email *" 
                                className={error.reEnterEmail && isTouched.reEnterEmail ? 'invalid' : ''}
                                value={reEnterEmail}
                                onBlur={this.handleFocus}
                                onChange={this.handleChange}/>
                            {isTouched.reEnterEmail &&
                                error.reEnterEmail && <p id="emailError2" className="error-message">{error.reEnterEmail}</p>}
                            

                        </div>
                        <div className="col-4">
                            <label htmlFor="phone"></label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone *" 
                                className={error.phone && isTouched.phone ? 'invalid' : ''}
                                value={phone}
                                onBlur={this.handleFocus}
                                onChange={this.handleChange}/>
                            {isTouched.phone &&
                                error.phone && <p id="phoneError">{error.phone}</p>}
                        </div>
                    </div>

                    <label htmlFor="address"></label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        placeholder="Address *" 
                        className={error.address && isTouched.address ? 'invalid' : ''}
                        value={address}
                        onBlur={this.handleFocus}
                        onChange={this.handleChange}/>
                    {isTouched.address &&
                        error.address && <p id="addressError">{error.address}</p>}

                    <div className="city-data">
                        <div>
                            <label htmlFor="city"></label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                placeholder="City *" 
                                className={error.city && isTouched.city ? 'invalid' : ''}
                                value={city}
                                onBlur={this.handleFocus}
                                onChange={this.handleChange}/>
                            {isTouched.city &&
                                error.city &&<p id="cityError">{error.city}</p>}
                        </div>
                        <div>
                            <input 
                                type="text" 
                                id="state" 
                                name="state" 
                                placeholder="State" 
                                value={ state }
                                onChange={this.handleChange}/>
                            <p id="stateError"></p>
                        </div>
                        
                        <div>
                            <label htmlFor="country"></label>
                            <input 
                                type="text" 
                                id="country" 
                                name="country" 
                                placeholder="Country/Region *"
                                className={error.country && isTouched.country? 'invalid' : ''}
                                value={country}
                                onBlur={this.handleFocus}
                                onChange={this.handleChange} /> 
                            {isTouched.country &&
                                error.country &&<p id="countryError">{error.country}</p>}
                        </div>
                        <div>
                            <label htmlFor="zip"></label>
                            <input 
                                type="text" 
                                id="zip" 
                                name="zip" 
                                placeholder="Zip/Postal code *" 
                                min="0"
                                className={error.zip && isTouched.zip ? 'invalid' : ''} 
                                value={zip}
                                onBlur={this.handleFocus}
                                onChange={this.handleChange}/>
                            {isTouched.zip &&
                                error.zip && <p id="zipError">{error.zip}</p>}
                        </div>  
                    </div>
                
                    <input 
                        type="text" 
                        name="How did you hear about us" 
                        placeholder="How did you hear about us" 
                        value={ heardAboutUs }
                        onChange={this.handleChange}
                    />
                    <button type="submit" value="Submit" className="submit"
                        disabled={this.props.isSubmitDisabled(error)}>
                            Submit
                    </button>
                </form>
            </section>
        )
    }
}