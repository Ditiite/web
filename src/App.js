import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './css/styles.css';
import './App.css';
import { Header } from './components/Header';
import { Title } from './components/Title';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			address: '',
			city: '',
			country: '',
			zip: ''
		}
	}


	handleSubmit = e => {
		e.preventDefault();

		alert('submiting');
	}

	isSubmitedDisabled = errors => {
		return Object.values(errors).some(errMsg => {
			return errMsg;
		});
	};

	validate = (name, email, city) => {
		const errors = {
			name: /^[a-zA-Z]+$/.test(name)
				? ''
				: 'you can have only alphabetic characters',
			city: /^[a-zA-Z]*$/.test(city)
				? ''
				: 'you can have only alphabetic characters',
			email: /^\w+@\w+\.\w{2,3}$/.test(email)
				? ''
				: 'an invalid email address'
		};

		return errors;
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Title />
				<form>
					<Route exact path="/skills" render={() => (
						<Skills
							onNavigate={() => {
								this.setState({ screen: 'skills' });
							}}
						/>
					)} />
					<Route exact path="/about" render={() => (
						<About
							name={this.state.name}
							city={this.state.city}
							email={this.state.email}
							onNavigate={() => {
								this.setState({ screen: 'about' });
							}}
							onChange={e => this.setState({ name: e.target.value })}
						/>
					)} />
					<Route exact path="/portfolio" render={() => (
						<Portfolio
							onNavigate={() => {
								this.setState({ screen: 'portfolio' });
							}}
						/>
					)} />
				</form>
			</div>
		);
	}
}

export default App;
