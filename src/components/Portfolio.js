import React, { Component } from 'react';
import { 
    NavLink, 
    Redirect } from "react-router-dom";
import '../App.css';

export class Portfolio extends Component{
    render() {
        return(
            <section className="portfolio container">
                <h2>3. Portfolio</h2>
                <p>
                    Prove you're IBM's next great designer 
                    by showing us who you are. What you've done. 
                    How you think. Tell us your story.</p>
                <label htmlFor="link"></label>
                <input type="link" name="link" placeholder="Portfolio link *" id="link" />
                <p id="linkError"></p>
                <br />
                <textarea  rows="5" cols="1" placeholder="Anything else (another link, availability, etc)?" id="information"></textarea>
                <br />
                <input type="submit" value="Submit" className="submit" />
            </section>
        )
    }
}