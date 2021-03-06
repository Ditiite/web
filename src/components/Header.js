import React, { Component } from 'react';
import { 
    NavLink, 
    Redirect } from "react-router-dom";
import '../App.css';


const style = {
    color: 'rgb(192, 192, 192)',
    textDecoration: 'none',
    fontSize: 18
}

const navStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '30px 0 50px'
}

export class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header>
                <ul style={navStyle}>
                    <li onClick={this.props.onNavigate}><NavLink to="/about" style={style}>About</NavLink></li>
                    <li onClick={this.props.onNavigate}><NavLink to="/skills" style={style}>Skills</NavLink></li>
                    <li><NavLink to="/portfolio" style={style}>Portfolio</NavLink></li>
                </ul>
            </header>
        );
    }
}