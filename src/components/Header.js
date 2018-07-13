import React from 'react';
import {
    NavLink
} from "react-router-dom";
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

export const Header = () => {

    return (
        <header>
            <ul style={navStyle}>
                <NavLink to="/about" style={style}>About</NavLink>
                <NavLink to="/skills" style={style}>Skills</NavLink>
                <NavLink to="/portfolio" style={style}>Portfolio</NavLink>
            </ul>
        </header>
    );
}
