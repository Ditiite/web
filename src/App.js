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
import { CheckData } from './components/CheckData';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formInputs: formInputs
		}
		console.log("hello",this.state.formInputs);
		this.addData = this.addData.bind(this);
	}

	addData(formInput) {
		this.setState((previousState) => {
			let newState = { ...previousState };
			newState.formInputs.push(formInput);
			return newState;
		});
	};

	isSubmitDisabled = error => {
		return Object.values(error).some(error=> {
			return error;
		});
	};
	
	render() {
		console.log("ABOUT US", this.state.formInputs);
		return (
			<div className="App">
				<Header />
				<Title />
				{/* <form onSubmit={this.handleSubmit}> */}
					<Route exact path="/about" render={() => (
						<About
							isSubmitDisabled={this.isSubmitDisabled}
							addData={this.addData}
							onBlur={this.handleFocus}
							onNavigate={() => {
								this.setState({ screen: 'about' });
							}}/>
					)} />
					<Route exact path="/skills" render={() => (
						<Skills
							isSubmitDisabled={this.isSubmitDisabled}
							addData={this.addData}
							onNavigate={() => {
								this.setState({ screen: 'skills' });
							}}
						/>
					)} />
					<Route exact path="/portfolio" render={() => (
						<Portfolio
							isSubmitDisabled={this.isSubmitDisabled}
							addData={this.addData}
							onBlur={this.handleFocus}
							onNavigate={() => {
								this.setState({ screen: 'portfolio' });
							}}
						/>
					)} />
					<Route exact path="/checkInfo" render={() => (
						<CheckData
							formInput={this.state.formInputs}
							isSubmitDisabled={this.isSubmitDisabled}
							onNavigate={() => {
								this.setState({ screen: 'checkInfo' });
							}}
						/>
					)} />
				{/* </form> */}
			</div>
		);
	}
}

export default App;
