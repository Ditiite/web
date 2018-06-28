import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import LocationCheck from './LocationCheck';
import ExtraDesign from './ExtraDesign';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interestedWorking: [],
            extraDesign: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('new',this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
    }

    handleCheck = e => {
        const value = e.target.value;
        const index = this.state[e.target.name].indexOf(value);

        index === -1
            ? this.setState(prevState => ({ [e.target.name]: [...prevState[e.target.name], value]}))
            : this.setState(prevState => {
                return {
                    [e.target.name]: [
                        ...prevState[e.target.name].slice(0, index),
                        ...prevState[e.target.name].slice(index +1)
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
        const { selectedDiscipline, interestedWorking, extraDesign } = this.state;
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
                        <ExtraDesign 
                            error={error}
                            extraDesign={extraDesign}
                            handleChange={this.handleChange}
                            isSubmitDisabled={this.isSubmitDisabled}
                            handleCheck={this.handleCheck}
                        />
                        <LocationCheck 
                            error={error}
                            interestedWorking={this.state.interestedWorking}
                            handleChange={this.handleChange}
                            isSubmitDisabled={this.isSubmitDisabled}
                            handleCheck={this.handleCheck}
                            validate={this.validate}
                        />
                    </div>
                    
                    <button type="submit" value="Submit" className="submit">
                        {/* disabled={this.props.isSubmitDisabled(error)}>*/}
                            <NavLink to="portfolio"> Next </NavLink> 
                    </button>
                   
                </form>
            </section>
        );
    }
}

export default Skills;