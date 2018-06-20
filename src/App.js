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
  state = {
    screen: 'skills' //skills, portfolio
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <form>
            <Route exact path="/skills" render={() => (
              <Skills
                onNavigate={() => {
                  this.setState({ screen: 'skills'});
                }} 
              />
            )} />
            <Route exact path="/about" render={() => (
              <About
                onNavigate={() => {
                  this.setState({ screen: 'about'});
                }} 
              />
            )} />
            <Route exact path="/portfolio" render={() => (
              <Portfolio
                onNavigate={() => {
                  this.setState({ screen: 'portfolio'});
                }} 
              />
            )} />
        </form>
      </div>
    );
  }
}

export default App;
