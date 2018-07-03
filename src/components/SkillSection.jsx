import React, { Component } from 'react';
import { radioButtons } from './InputObjects';
//import { Link } from 'react-router-dom';
import { RadioButtons } from './RadioButtons';

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDiscipline: ''
        }
    }

    handleChange = event => {
        this.setState({
            selectedDiscipline: event.target.value
        }, function () {
            console.log("STATE selectedDiscipline", this.state.selectedDiscipline);
        });

        this.props.onChange({
            selectedDiscipline: event.target.value
        });
    }

    render() {
        // const { selectedDiscipline, location, validate } = this.state;
        // const error = this.validate(selectedDiscipline, location);

        return (
            <section className="container">
                <form>
                    <h2>2. Skill and location</h2>
                    <p>Which is your primary design discipline? *</p>
                    <div className="radio-buttons" >
                        {
                            radioButtons.map((item) => {
                                const {
                                    name,
                                    type,
                                    id,
                                    value,
                                    selectedDiscipline
                                } = item;

                                return (
                                    <RadioButtons
                                        key={id}
                                        type={type}
                                        name={name}
                                        id={id}
                                        selectedDiscipline={this.state.selectedDiscipline}
                                        value={value}
                                        handleChange={this.handleChange}
                                    />
                                );
                            }, console.log('i was clicked', this.state.selectedDiscipline))
                        }
                        {/* <Link to="/portfolio" className="submit">
                            <button type="submit" disabled={this.isSubmitDisabled(error)}>
                                Next
                            </button>
                        </Link> */}
                    </div>
                </form>
            </section>
        );
    }
}