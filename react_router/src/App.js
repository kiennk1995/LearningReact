import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      console.log('match', match);
      var active = match ? 'active bbb' : '';
      return (
        <li className={active}>
          <Link to={to}>{label}</Link>
        </li>
      )
    }} />
  );
}

class App extends Component {
  render() {
    return (
      <Router  >
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="# ">REACT - ROUTER</a>
          <ul className="nav navbar-nav">
            <MenuLink label="Trang Chủ" exact to="/" activeOnlyWhenExact={true} />
            <MenuLink label="Giới Thiệu" to="/about" activeOnlyWhenExact={false} />
          </ul>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    );
  }
}

export default App;
