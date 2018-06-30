import React, { Component } from 'react';
import './css/styles.css';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import { Form } from './components/Form';

class App extends Component {
    render() {
        return(
            <div className="App">
				<Title />
                <Header />
                <Form />
            </div>
        );
    }
}

export default App;