import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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

class Header extends Component {
    render() {
        return(
            <header>
                <ul style={navStyle}>
                    <li><NavLink to="/about" style={style}>About</NavLink></li>
                    <li><NavLink to="/skills" style={style}>Skills</NavLink></li>
                    <li><NavLink to="/portfolio" style={style}>Portfolio</NavLink></li>
                    <li><NavLink to="/checkData" style={style}>Check Data</NavLink></li>
                </ul>
            </header>
        );
    }
}

export default Header;