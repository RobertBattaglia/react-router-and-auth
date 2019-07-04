import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
          </nav>
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
