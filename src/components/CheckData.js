import React, { Component } from 'react';

export class CheckData extends Component {
    render() {
        return(
            <section  className="container">
                <h1>Check Data </h1>
                    
                    <p>Hello world{this.props.hello}</p>
            </section>
        );
    }
}