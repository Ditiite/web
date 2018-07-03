import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { About } from './About';
import { Skills } from './SkillSection';
import { CheckData } from './CheckData';
import { Portfolio } from './Portfolio';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onChange = newValue => {
        this.setState(newValue);
        console.log('Thi is from parent', this.state);
    }



    render() {
        console.log('Thi is from parent render', this.state.inputFields);
        return (
            <React.Fragment>
                <Route exact path="/about" render={() => (
                    <About
                        onChange={inputFields => this.onChange(inputFields)}
                    />
                )}
                />
                <Route exact path="/skills" render={() => (
                    <Skills onChange={inputFields => this.onChange(inputFields)} />
                )}
                />
                <Route exact path="/portfolio" render={() => (
                    <Portfolio onChange={inputFields => this.onChange(inputFields)} />
                )}
                />
                <Route exact path="/checkData" render={() => (
                    <CheckData
                        inputFields={this.state} />
                )}
                />
            </React.Fragment>
        );
    }
}
