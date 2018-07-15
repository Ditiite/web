import React, { Component } from 'react';
import { Field } from 'redux-form'

export class LocationCheck extends Component {

    render() {
        
        return (
            <div className="col-6">
                <p>Where are you interested working? *</p>
                <p>You must be legaly authorized to work without visa sponsorship in the location you choose.</p>
                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="AustinTexas"
                        value="AustinTexas" />
                    <label htmlFor="AustinTexas">Austin, Texas</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="newYork"
                        value="newYork" />
                    <label htmlFor="newYork">New York, New York</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="torontoCanada"
                        value="torontoCanada" />
                    <label htmlFor="torontoCanada">Toronto, Canada</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="shanghaiChina"
                        value="shanghaiChina"/>
                    <label htmlFor="shanghaiChina">Shanghai, China</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="dublinIrland"
                        value="dublinIrland"/>
                    <label htmlFor="dublinIrland">Dublin, Irland </label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="hurskeyUk"
                        value="hurskeyUk" />
                    <label htmlFor="hurskeyUk">Hursley, United Kingdom</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="boblingenGermany"
                        value="boblingenGermany"/>
                    <label htmlFor="boblingenGermany">Boblingen, Germany</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="interestedWorking"
                        id="somewherElse"
                        value="somwhereElse"
                    />
                    <label htmlFor="somewherElse">Somewhere else</label>
                </div>
                
            </div>
        );
    }
}