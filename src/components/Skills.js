import React, { Component } from 'react';

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDiscipline: null,
            interestedWorking: []
        }
        this.handleChane = this.handleChane.bind(this);
    }

    handleChane(event) {
        this.setState({
            selectedDiscipline: event.target.value
        });
        console.log(this.state.selectedDiscipline);
        
    }

    isSubmitDisabled = error => {
		return Object.values(error).some(errMsg => {
			return errMsg;
		});
	};

    validate = (selectedDiscipline) => {
        const error = {
            selectedDiscipline: selectedDiscipline !== null
                ? ""
                : "Please select one of the disciplins!"
            // interestedWorking: this.interestedWorking.length > 0
            //     ? ""
            //     : "Please select one of the places where are you interested working!"
        }
        return error;
    }
    render() {
        //const { selectedDiscipline, interestedWorking } = this.state;
        const error = this.validate( this.state.selectedDiscipline, this.state.interestedWorking );
        
        return(
            <section className="container">
                <form>
                    <h2>2. Skill and location</h2>

                    <div>
                        <p>Which is your primary design discipline? *</p>
                        <div className="radio-buttons" >

                            <input type="radio" name="design" id="research" 
                                value="researchDesign"
                                checked={this.state.selectedDiscipline === 'researchDesign'}
                                onChange={this.handleChane}/>
                            <label htmlFor="research">Design Research</label>   
                        
                            <input type="radio" name="design" id="visual" 
                                value="visualDesign"
                                checked={this.state.selectedDiscipline === 'visualDesign'}
                                onChange={this.handleChane}/>
                            <label htmlFor="visual">Visual Design</label>
                        
                        
                            <input type="radio" name="design" id="ux" 
                                value="uxDesign"
                                checked={this.state.selectedDiscipline === 'uxDesign'}
                                onChange={this.handleChane}/>
                            <label htmlFor="ux" >UX Design</label>
                        
                        
                            <input type="radio" name="design" id="dev" 
                                value="frontEndDev"
                                checked={this.state.selectedDiscipline === 'frontEndDev'}
                                onChange={this.handleChane}/>
                            <label htmlFor="dev"> Front-end Dev</label>
                        </div>
                        <span className={error.name ? 'invalid' : ''}>{error.selectedDiscipline}</span> 
                    </div>

                    <div className="checkbox-section">
                        <div className="col-6">
                            <p>Do you have experience with any other disciplines?</p>
                            <div className="checkbox">
                                <input type="checkbox" name="check" value="visualDesign" id="check_1" />
                                <label htmlFor="check_1">Visual Design</label>
                            </div>
                            
                            <div className="checkbox">
                                <input type="checkbox" name="check" value="uxDesign" id="check_2" />
                                <label htmlFor="check_2">UX Design</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check" value="frontEnd" id="check_3" />
                                <label htmlFor="check_3">Front-end </label>
                            </div>

                        </div>

                        <div className="col-6">
                            <p>Where are you interested working? *</p>
                            <p>You must be legaly authorized to work without visa sponsorship in the location you choose.</p>
                            <div className="checkbox">
                                <input type="checkbox" name="check" id="check_4" value="Austin-Texas"/>
                                <label htmlFor="check_4">Austin, Texas</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check" id="check_5" value="newYork"/>
                                <label htmlFor="check_5">New York, New York</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check" id="check_6" value="torontoCanada"/>
                                <label htmlFor="check_6">Toronto, Canada</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check" id="check_7" value="shanghaiChina"/>
                                <label htmlFor="check_7">Shanghai, China</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check_8" id="check_8" value="dublinIrland"/>
                                <label htmlFor="check_8">Dublin, Irland </label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check_9" id="check_9" value="hurskeyUk"/>
                                <label htmlFor="check_9">Hursley, United Kingdom</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check_10" id="check_10" value="boblingenGermany"/>
                                <label htmlFor="check_10">Boblingen, Germany</label>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" name="check_11" id="check_11" value="somwhereElse"/>
                                <label htmlFor="check_11">Somewhere else</label>
                            </div>  
                        </div>
                    </div>
                    <button type="submit" value="Submit" className="submit"
                        disabled={this.isSubmitDisabled(error)}>
                            Submit
                    </button>
                </form>
            </section>
        )
    }
}