import React, { Component } from 'react';
//import { Route } from "react-router-dom";
import './css/styles.css';
import './App.css';
import { Values } from "redux-form-website-template";
// import { Header } from './components/Header';
import { Title } from './components/Title';
import Form from './components/Form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function showResults(values) {
	await sleep(500); // simulate server latency
	window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};


class App extends Component {

	render() {
		return (
			<div className="App">
				{/* <Header /> */}
				<Title />
				<Form onSubmit={showResults} />
				<Values form="portfolioForm" />
			</div>
		);
	}
}

export default App;
