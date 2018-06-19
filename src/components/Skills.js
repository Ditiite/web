import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return(
            <section className="container">
            <h2>2. Skill and location</h2>

            <div>
                <p>Which is your primary design discipline? *</p>
                <div className="radio-buttons" >

                    <input type="radio" name="design" id="research" />
                    <label for="research">Design Research</label>   
                
                    <input type="radio" name="design" id="visual" />
                    <label for="visual">Visual Design</label>
                
                
                    <input type="radio" name="design" id="ux" />
                    <label for="ux" >UX Design</label>
                
                
                    <input type="radio" name="design" id="dev" />
                    <label for="dev"> Front-end Dev</label>
                
                </div>
            </div>

            <div className="checkbox-section">
                <div className="col-6">
                    <p>Do you have experience with any other disciplines?</p>
                    <div className="checkbox">
                         <input type="checkbox" name="check" value="check-1" id="check_1" />
                         <label for="check_1">Visual Design</label>
                    </div>
                    
                    <div className="checkbox">
                        <input type="checkbox" name="check" value="check-2" id="check_2" />
                        <label for="check_2">UX Design</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check" value="check-3" id="check_3" />
                        <label for="check_3">Front-end </label>
                    </div>

                </div>

                <div className="col-6">
                    <p>Where are you interested working? *</p>
                    <p>You must be legaly authorized to work without visa sponsorship in the location you choose.</p>
                    <div className="checkbox">
                        <input type="checkbox" name="check" id="check_4" />
                        <label for="check_4">Austin, Texas</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check" id="check_5" />
                        <label for="check_5">New York, New York</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check" id="check_6" />
                        <label for="check_6">Toronto, Canada</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check" id="check_7" />
                        <label for="check_7">Shanghai, China</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check_8" id="check_8" />
                        <label for="check_8">Dublin, Irland </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check_9" id="check_9" />
                        <label for="check_9">Hursley, United Kingdom</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check_10" id="check_10" />
                        <label for="check_10">Boblingen, Germany</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="check_11" id="check_11" />
                        <label for="check_11">Somewhere else</label>
                    </div>  
                </div>
            </div>
        </section>
        )
    }
}