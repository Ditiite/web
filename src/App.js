import React, { Component } from 'react';
//import { Route } from "react-router-dom";
import './css/styles.css';
import './App.css';
import { Header } from './components/Header';
import { Title } from './components/Title';
import FormFirstPage from './components/FormPages/FormFirstPage';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Title />
				<FormFirstPage onSubmit={values => {
					console.log('Values', values);
				}}
				/>
			</div>
		);
	}
}

export default App;
