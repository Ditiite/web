import React, { Component } from 'react';
import { InputFields } from './InputFields';
import { requiredInput } from './InputObj';

export class Portfolio extends Component {
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
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.props.onChange({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(this.state);
    }

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

    render(){
        const { name, phone, city, email, reEnterEmail, address, state, country, zip, heardAboutUs, isTouched } = this.state;
        const error = this.validate(name, phone, city, email, reEnterEmail, address, country, zip);
        
        return(
            <section className="info container">
                <form>
                    <h2>1. Personal Information</h2>
                    <div className="first-container">
                        <div className="col-8">
                            {
                                requiredInput.map( (item) => {
                                    const {
                                        name,
                                        type,
                                        id,
                                        placeholder
                                    } = item;

                                    return (
                                        <InputFields
                                            key={name}
                                            type={type}
                                            name={name}
                                            id={name}
                                            placeholder={placeholder}
                                            className={error.name && isTouched.name ? 'invalid' : ''}
                                            value={this.state[name]}
                                            handleChange={this.handleChange} 
                                            onBlur={this.handleFocus}
                                            {isTouched.name &&
                                                error.name && <p id="nameError" className="err-msg">{error.name}</p>}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}