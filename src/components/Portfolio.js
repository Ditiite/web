import React, { Component } from 'react';
import { RequiredInput, NotRequiredInput } from './InpupObj';
import { Link } from 'react-router-dom';


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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit(e)  {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
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
                <form onSubmit={this.handleSubmit}>
                    <h2>1. Personal Information</h2>
                    <div className="first-container">
                        <div className="col-8">
                            { 
                                RequiredInput.map((name, i) =>
                                <label htmlFor={name.name}>
                                        <input key={i} 
                                            type={name.type}
                                            id={name.id}
                                            name={name.name}
                                            placeholder={name.placeholder}
                                            className={error.name && isTouched.name ? 'invalid' : ''}
                                            />
                                </label>
                                )
                            }
                        </div>
                    </div>
                    <button type="submit" value="Submit" className="submit" onSubmit={this.handleSubmit}>
                        {/* disabled={this.props.isSubmitDisabled(error)}> */}
                        <Link to="skills">
                            Next
                        </Link>
                    </button>
                </form>
            </section>
        );
    }
}