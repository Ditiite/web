import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import LocationCheck from './LocationCheck';
import { ExtraDesign } from './ExtraDesign';

export class Skills extends Component {
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

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.onSubmit(this.state);
    //     console.log(this.state);
    // }

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

    handleCheckDesign = e => {
        const value = e.target.value;
        const index = this.state.extraDesign.indexOf(value);
        
        index === -1
            ? this.setState(prevState => ({ extraDesign: [...prevState.extraDesign, value]}))
            : this.setState(prevState => {
                return {
                    extraDesign: [
                        ...prevState.extraDesign.slice(0, index),
                        ...prevState.extraDesign.slice(index +1)
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
                        <ExtraDesign 
                            error={error}
                            extraDesign={this.state.extraDesign}
                            handleChange={this.handleChange}
                            isSubmitDisabled={this.isSubmitDisabled}
                            handleCheckDesign={this.handleCheckDesign}
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
                    
                   {/* <button > */}
                         {/* disabled={this.props.isSubmitDisabled(error)}> */}
                         <Link to ="skills" type="submit" value="Submit" className="submit" onSubmit={this.handleSubmit}>
                                Next
                            </Link>
                    {/* </button> */}
                   
                </form>
            </section>
        );
    }
}
