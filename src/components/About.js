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
            heardAboutUs: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
		e.preventDefault();
		e.target.reset();
        
        // this.props.addData({
        //    name: this.state.name,
        //     phone: this.state.phone,
        //     email: this.state.email,
        //     reEnterEmail: this.state.reEnterEmail,
        //     address: this.state.address,
        //     city: this.state.city,
        //     state: this.state.state,
        //     country: this.state.country,
        //     zip: this.state.zip,
        //     heardAboutUs: this.state.heardAboutUs
        // })
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
        const { name, phone, city, email, reEnterEmail, address, state, country, zip, heardAboutUs } = this.state;
        const error = this.validate( name, phone, city, email, reEnterEmail, address, country, zip );

        return(
            <section className="info container">
                <form>
                    <h2>1. Personal Information</h2>
                    <div className="first-container">
                        <div className="col-8">
                        
                            <label htmlFor="name"></label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Full name *" 
                                className={error.name ? 'invalid' : ''}
                                value={name}
                                onChange={this.handleChange}/>
                            <span id="nameError" className="err-msg">{error.name}</span>

                            <label htmlFor="email"></label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email *" 
                                className={error.email ? 'invalid' : ''}
                                value={ email }
                                onChange={this.handleChange}/>
                            <p id="emailError" className="error-message">{error.email}</p>

                            <label htmlFor="email-again"></label>
                            <input 
                                type="email" 
                                id="email-again" 
                                name="reEnterEmail" 
                                placeholder="Re-enter email *" 
                                className={error.reEnterEmail ? 'invalid' : ''}
                                value={ reEnterEmail }
                                onChange={this.handleChange}/>
                            <p id="emailError2" className="error-message">{error.reEnterEmail}</p>

                        </div>
                        <div className="col-4">
                            <label htmlFor="phone"></label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone *" 
                                className={error.phone ? 'invalid' : ''}
                                value={ phone }
                                onChange={this.handleChange}/>
                            <p id="phoneError">{error.phone}</p>
                        </div>
                    </div>

                    <label htmlFor="address"></label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        placeholder="Address *" 
                        className={error.address ? 'invalid' : ''}
                        value={ address }
                        onChange={this.handleChange}/>
                    <p id="addressError">{error.address}</p>

                    <div className="city-data">
                        <div>
                            <label htmlFor="city"></label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                placeholder="City *" 
                                className={error.city ? 'invalid' : ''}
                                value={ city }
                                onChange={this.handleChange}/>
                            <p id="cityError">{error.city}</p>
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
                                className={error.country ? 'invalid' : ''}
                                value={ country }
                                onChange={this.handleChange} /> 
                            <p id="countryError">{error.country}</p>
                        </div>
                        <div>
                            <label htmlFor="zip"></label>
                            <input 
                                type="text" 
                                id="zip" 
                                name="zip" 
                                placeholder="Zip/Postal code *" 
                                min="0"
                                className={error.zip ? 'invalid' : ''} 
                                value={ zip }
                                onChange={this.handleChange}/>
                            <p id="zipError">{error.zip}</p>
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