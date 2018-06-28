import React, { Component } from 'react';
import LocationCheck from './LocationCheck';
import { Link } from 'react-router-dom';

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDiscipline: '',
            interestedWorking: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
    }


    handleChange(event) {
        this.setState({
            selectedDiscipline: event.target.value
        }, function (){console.log(this.state.selectedDiscipline);});
        this.props.addData({
            selectedDiscipline: this.state.selectedDiscipline,
            interestedWorking: this.state.interestedWorking
        });
        
    }

    handleCheck = e => {
        const value = e.target.value;
        const index = this.state.interestedWorking.indexOf(value);

        index === -1
            ? this.setState(prevState => ({ interestedWorking: [...prevState.interestedWorking, value]}))
            : this.setState(prevState => {
                return {
                    interestedWorking: [
                        ...prevState.interestedWorking.slice(0, index),
                        ...prevState.interestedWorking.slice(index +1)
                    ]
                };
            });
    }

    validate = (selectedDiscipline, interestedWorking) => {
        const error = {
            selectedDiscipline: selectedDiscipline !== ''
                ? ""
                : "Please select one of the disciplins!",
            interestedWorking: interestedWorking.length > 0
                ? ""
                : "Please select one of the places where are you interested working!"
        }
        return error;
    }
    render() {
        const { selectedDiscipline, interestedWorking } = this.state;
        const error = this.validate( selectedDiscipline, interestedWorking );
        
        return(
            <section className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>2. Skill and location</h2>

                    <div>
                        <p>Which is your primary design discipline? *</p>
                        <div className="radio-buttons" >

                            <input type="radio" name="design" id="research" 
                                value="researchDesign"
                                checked={selectedDiscipline === 'researchDesign'}
                                onChange={this.handleChange}/>
                            <label htmlFor="research">Design Research</label>   
                        
                            <input type="radio" name="design" id="visual" 
                                value="visualDesign"
                                checked={selectedDiscipline === 'visualDesign'}
                                onChange={this.handleChange}/>
                            <label htmlFor="visual">Visual Design</label>
                        
                        
                            <input type="radio" name="design" id="ux" 
                                value="uxDesign"
                                checked={selectedDiscipline === 'uxDesign'}
                                onChange={this.handleChange}/>
                            <label htmlFor="ux" >UX Design</label>
                        
                        
                            <input type="radio" name="design" id="dev" 
                                value="frontEndDev"
                                checked={selectedDiscipline === 'frontEndDev'}
                                onChange={this.handleChange}/>
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

                        <LocationCheck 
                            error={error}
                            interestedWorking={this.state.interestedWorking}
                            handleChange={this.handleChange}
                            isSubmitDisabled={this.isSubmitDisabled}
                            handleCheck={this.handleCheck}
                            validate={this.validate}/>
                    </div>
                    
                    <button type="submit" value="Submit" className="submit"
                        disabled={this.props.isSubmitDisabled(error)}>
                            <Link to="portfolio"> Next </Link>
                    </button>
                   
                </form>
            </section>
        )
    }
}