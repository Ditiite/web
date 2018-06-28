import React, { Component } from 'react';

export class CheckData extends Component {
    render() {
        return(
            <div>
                <h1>Check Data </h1>
                {Object.keys(this.props.formInputs).map((input, index) =>
                    <p key={this.props.formInputs.index}
                        className={this.props.formInputs.name}>
                        <span>{this.props.formInputs.placeholder}</span>
                        {this.props.formInputs.input}
                    </p>
                )}
            </div>
        );
    }
}