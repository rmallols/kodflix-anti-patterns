import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Gallery from './gallery/Gallery';
import Details from './details/Details';
import NotFound from './not-found/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/:showId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
