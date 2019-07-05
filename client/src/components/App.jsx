import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import NoMatch from './NoMatch.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
          </nav>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
