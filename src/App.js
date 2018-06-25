import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './css/styles.css';
import './App.css';
import { Header } from './components/Header';
import { Title } from './components/Title';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { formInputs } from './formData.json';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formInputs: formInputs
		}
		this.addData = this.addData.bind(this);
	}

	addData(formInput) {
		this.setState((previousState) => {
			let newState = { ...previousState };
			newState.formInputs.push(formInput);
			return newState;
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Title />
				{/* <form onSubmit={this.handleSubmit}> */}
					<Route exact path="/skills" render={() => (
						<Skills
							
							onNavigate={() => {
								this.setState({ screen: 'skills' });
							}}
						/>
					)} />
					<Route exact path="/about" render={() => (
						<About
							addData={this.addData}
							onNavigate={() => {
								this.setState({ screen: 'about' });
							}}/>
					)} />
					<Route exact path="/portfolio" render={() => (
						<Portfolio
							onNavigate={() => {
								this.setState({ screen: 'portfolio' });
							}}
						/>
					)} />
				{/* </form> */}
			</div>
		);
	}
}

export default App;
