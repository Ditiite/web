import React, { Component } from 'react';
import { Route } from "react-router-dom";
import About from './About';
import Skills from './Skills.jsx';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputFields: {}
        }
    }

    onSubmit = inputFields => {
        console.log('Thi is from parent', inputFields);
    }

    render() {
        return(
            <div>
                <Route exact path="/about" render={() => (
                    <About onSubmit= { inputFields => this.onSubmit(inputFields)}/>
                )}
                />
                <Route exact path="/skills" render={() => (
                    <Skills  onSubmit= { inputFields => this.onSubmit(inputFields)}/>
                )}
                />
            </div>
        );
    }
}

export default Form;