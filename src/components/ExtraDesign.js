import React, { Component } from 'react';
import { Field } from 'redux-form'

export class ExtraDesign extends Component {

    render() {
        return (
            <div className="col-6">
                <p>Do you have experience with any other disciplines?</p>
                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="check"
                        id="check_1"
                        value="researchDesign" />
                    <label htmlFor="check_1">Research Design</label>
                </div>
                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="check"
                        id="check_1"
                        value="visualDesign" />
                    <label htmlFor="check_1">Visual Design</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="check"
                        id="check_2"
                        value="uxDesign" />
                    <label htmlFor="check_2">UX Design</label>
                </div>

                <div className="checkbox">
                    <Field
                        type="checkbox"
                        component="input"
                        name="check"
                        id="check_3"
                        value="frontEnd"/>
                    <label htmlFor="check_3">Front-end </label>
                </div>

            </div>
        );
    }
}