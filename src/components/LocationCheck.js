import React, { Component } from 'react';

class LocationCheck extends Component{
 
    render() {
        const { handleCheck, interestedWorking } = this.props;
        return(
            <div className="col-6">
                <p>Where are you interested working? *</p>
                <p>You must be legaly authorized to work without visa sponsorship in the location you choose.</p>
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="AustinTexas" 
                        value="AustinTexas"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('AustinTexas')}
                        />
                    <label htmlFor="AustinTexas">Austin, Texas</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="newYork" 
                        value="newYork"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('newYork')}
                        />
                    <label htmlFor="newYork">New York, New York</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="torontoCanada" 
                        value="torontoCanada"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('torontoCanada')}
                        />
                    <label htmlFor="torontoCanada">Toronto, Canada</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="shanghaiChina" 
                        value="shanghaiChina"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('shanghaiChina')}
                        />
                    <label htmlFor="shanghaiChina">Shanghai, China</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="dublinIrland" 
                        value="dublinIrland"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('dublinIrland')}
                        />
                    <label htmlFor="dublinIrland">Dublin, Irland </label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="hurskeyUk" 
                        value="hurskeyUk"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('hurskeyUk')}
                        />
                    <label htmlFor="hurskeyUk">Hursley, United Kingdom</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="boblingenGermany" 
                        value="boblingenGermany"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('boblingenGermany')}
                        />
                    <label htmlFor="boblingenGermany">Boblingen, Germany</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="interestedWorking" 
                        id="somewherElse" 
                        value="somwhereElse"
                        onChange={handleCheck}
                        checked={interestedWorking.includes('somewherElse')}
                        />
                    <label htmlFor="somewherElse">Somewhere else</label>
                </div>  
                <span className={this.props.error.name ? 'invalid' : ''}>{this.props.error.interestedWorking}</span>
            </div>
        );
    }
}

export default LocationCheck;