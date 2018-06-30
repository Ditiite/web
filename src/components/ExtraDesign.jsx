import React, { Component } from 'react';

export class ExtraDesign extends Component {
    
    render(){
        const { handleCheck, extraDesign } = this.props;
        return(
            <div className="col-6">
                <p>Do you have experience with any other disciplines?</p>
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="check" 
                        id="check_1"
                        value="researchDesign"
                        onChange={handleCheck}
                        checked={extraDesign.includes('researchDesign')}/>
                    <label htmlFor="check_1">Research Design</label>
                </div>
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="check" 
                        id="check_1" 
                        value="visualDesign" 
                        onChange={handleCheck}
                        checked={extraDesign.includes('visualDesign')}/>
                    <label htmlFor="check_1">Visual Design</label>
                </div>
                
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="check" 
                        id="check_2" 
                        value="uxDesign" 
                        onChange={handleCheck}
                        checked={extraDesign.includes('uxDesign')}/>
                    <label htmlFor="check_2">UX Design</label>
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="check" 
                        id="check_3" 
                        value="frontEnd"
                        onChange={handleCheck}
                        checked={extraDesign.includes('frontEnd')}/>
                    <label htmlFor="check_3">Front-end </label>
                </div>

            </div>
        );
    }
}
