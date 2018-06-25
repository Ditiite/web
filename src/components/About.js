import React, { Component } from 'react';

export class About extends Component {
    
    render() {
        const { name, city, email } = this.state;
        const errors = this.validate( name, city, email );
        return(
            <section className="info container">
                <h2>1. Personal Information</h2>
                <div className="first-container">
                    <div className="col-8">
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" placeholder="Full name *" />
                        <p id="nameError" className="err-msg">{errors.name}</p>
                        <label htmlFor="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email *" />
                        <p id="emailError" className="error-message"></p>
                        <label htmlFor="email-again"></label>
                        <input type="email" id="email-again" name="email-again" placeholder="Re-enter email *" />
                        <p id="emailError2" className="error-message"></p>
                    </div>
                    <div className="col-4">
                        <label htmlFor="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Phone *" />
                        <p id="phoneError"></p>
                    </div>
                </div>

                <label htmlFor="address"></label>
                <input type="text" id="address" name="address" placeholder="Address *" />
                <p id="addressError"></p>

                <div className="city-data">
                    <div>
                        <label htmlFor="city"></label>
                        <input type="text" id="city" name="city" placeholder="City *" />
                        <p id="cityError"></p>
                    </div>
                    <div>
                        <input type="text" id="state" name="state" placeholder="State" />
                        <p id="stateError"></p>
                    </div>
                    
                    <div>
                        <label htmlFor="country"></label>
                        <input type="text" id="country" name="country" placeholder="Country/Region *" /> 
                        <p id="countryError"></p>
                    </div>
                    <div>
                        <label htmlFor="zip"></label>
                        <input type="text" id="zip" name="zip" placeholder="Zip/Postal code *" min="0" />
                        <p id="zipError"></p>
                    </div>  
                </div>
            
                <input type="text" name="How did you hear about us" placeholder="How did you hear about us" />
            
            </section>
        )
    }
}