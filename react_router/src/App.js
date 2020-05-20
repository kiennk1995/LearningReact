import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router  >
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="# ">REACT - ROUTER</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    );
  }
}

export default App;
