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

		// this.setState({
        //     name: "",
        //     phone: "",
        //     email: "",
        //     reEnterEmail: "",
        //     address: "",
        //     city: "",
        //     state: "",
        //     country: "",
        //     zip: "",
        //     heardAboutUs: ""
		// })
        
        // this.props.addData({
        //     name: this.state.name,
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
        console.log('say hello');
        const target = event.target;

        switch(target.name) {
            case 'name':
                this.setState({
                    name: target.value
                });
                console.log(this.name)
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
            // default:
            //     this.setState({ name:'Please check your inputs!'})
        }
    }

    isSubmitDisabled = errors => {
        
		return Object.values(errors).some(errMsg => {
			return errMsg;
		});
	};

    validate= (name, phone, email, reEnterEmail, address, city, country, zip ) => {
        const errors = {
            name:  /^[a-zA-Z]+$/.test(name)
                ? ''
                : 'you can have only alphabetic characters',
            phone: /[\d]{9}/.test(phone)
                ? ''
                : 'Please provide correct phone number!',
            email: /^\w+@\w+\.\w{2,3}$/.test(email)
                ? ''
                : 'an invalid email address',
            reEnterEmail: this.state.email.value !== this.state.reEnterEmail.value
                ? ''
                : 'an invalid email address',
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

        return errors;
    }

    render() {
        const { name, phone, city, email, address, country, zip } = this.state;
        const errors = this.validate( name, phone, city, email, address, country, zip );

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
                            className={errors.name ? 'invalid' : ''}
                            value={name}
                            onChange={this.handleChange}/>
                        <span id="nameError" className="err-msg">{errors.name}</span>

                        <label htmlFor="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email *" 
                            className={errors.email ? 'invalid' : ''}
                            value={ this.state.email }
                            onChange={this.handleChange}/>
                        <p id="emailError" className="error-message">{errors.email}</p>

                        <label htmlFor="email-again"></label>
                        <input type="email" id="email-again" name="reEnterEmail" placeholder="Re-enter email *" 
                            className={errors.reEnterEmail ? 'invalid' : ''}
                            value={ this.state.reEnterEmail }
                            onChange={this.handleChange}/>
                        <p id="emailError2" className="error-message">{errors.reEnterEmail}</p>

                    </div>
                    <div className="col-4">
                        <label htmlFor="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Phone *" 
                            className={errors.phone ? 'invalid' : ''}
                            value={ this.state.phone }
                            onChange={this.handleChange}/>
                        <p id="phoneError">{errors.phone}</p>
                    </div>
                </div>

                <label htmlFor="address"></label>
                <input type="text" id="address" name="address" placeholder="Address *" 
                    className={errors.address ? 'invalid' : ''}
                    value={ this.state.address }
                    onChange={this.handleChange}/>
                <p id="addressError">{errors.address}</p>

                <div className="city-data">
                    <div>
                        <label htmlFor="city"></label>
                        <input type="text" id="city" name="city" placeholder="City *" 
                            className={errors.city ? 'invalid' : ''}
                            value={ this.state.city }
                            onChange={this.handleChange}/>
                        <p id="cityError">{errors.city}</p>
                    </div>
                    <div>
                        <input type="text" id="state" name="state" placeholder="State" 
                            value={ this.state.state }
                            onChange={this.handleChange}/>
                        <p id="stateError"></p>
                    </div>
                    
                    <div>
                        <label htmlFor="country"></label>
                        <input type="text" id="country" name="country" placeholder="Country/Region *"
                            className={errors.country ? 'invalid' : ''}
                            value={ this.state.country }
                            onChange={this.handleChange} /> 
                        <p id="countryError">{errors.country}</p>
                    </div>
                    <div>
                        <label htmlFor="zip"></label>
                        <input type="text" id="zip" name="zip" placeholder="Zip/Postal code *" min="0"
                            className={errors.zip ? 'invalid' : ''} 
                            value={ this.state.zip }
                            onChange={this.handleChange}/>
                        <p id="zipError">{errors.zip}</p>
                    </div>  
                </div>
            
                <input type="text" name="How did you hear about us" placeholder="How did you hear about us" 
                    value={ this.state.heardAboutUs }
                    onChange={this.handleChange}/>
                <button type="submit" value="Submit" className="submit"
                    disabled={this.isSubmitDisabled(errors)}>
                        Submit
                </button>
                </form>
            </section>
        )
    }
}