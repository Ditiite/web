import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export class Portfolio extends Component{
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            information: '',
            isTouched: {
                link: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit = e => {
        e.preventDefault();

       
    }

    isSubmitDisabled = error => {
		return Object.values(error).some(error=> {
			return error;
		});
	};

    handleChange(event){
        const target = event.target;

        switch(target.name) {
            case 'link':
                this.setState({
                    link: target.value
                });
                break;
            case 'information':
                this.setState({
                    information: target.value
                });
                break;
            default:
                this.setState({
                    link: 'Link is not valid.'
                })
        };
	}
    
    handleFocus = e => {
        const inputField = e.target.name;
        this.setState(prevState => ({
            isTouched: {
                ...prevState.isTouched,
                [inputField]: true
            }
        }))
    }


    validate = (link) => {
        const error = {
            link: /(^(http[s]?:\/\/)?|([w]{3}\.))?([/\w.=?:;"!&-]+)/.test(link)
                ? ""
                : "Please provide profile link!"
        }
        return error;
    }

    render() {
        const { link, information } = this.state;
        const error = this.validate( link );
        return(
            <section className="portfolio container">
                <form onSubmit={this.handleSubmit}>
                    <h2>3. Portfolio</h2>
                    <p>
                        Prove you're IBM's next great designer 
                        by showing us who you are. What you've done. 
                        How you think. Tell us your story.</p>
                    <label htmlFor="link"></label>
                    <input 
                        type="link" 
                        name="link" 
                        placeholder="Portfolio link *" 
                        className={error.link && this.state.isTouched.link ? 'invalid' : ''}
                        value={ link }
                        id="link"
                        onBlur={this.handleFocus}
                        onChange={this.handleChange} />
                    {this.state.isTouched.link &&
                        error.link && <p className="error-message" id="addressError">{error.link}</p>}
                    <br />
                    <textarea  
                        rows="5" 
                        cols="1" 
                        name="information"
                        placeholder="Anything else (another link, availability, etc)?" 
                        id="information"
                        value={ information }
                        onChange={this.handleChange}
                        ></textarea>
                    <br />
                    
                        <button type="submit" value="Submit" className="submit"
                            disabled={this.props.isSubmitDisabled(error)}>
                               <Link to="checkInfo"> Next </Link>
                        </button>
                   
                </form>
            </section>
        );
    }
}