import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Gallery from './gallery/Gallery';
import Details from './details/Details';
import NotFound from './not-found/NotFound';

class App extends Component {

  constructor({ history, location }) {
    super();
    ReactGA.initialize('UA-121194998-1');
    this.trackPageView(location);
    history.listen((location) => this.trackPageView(location));
  }

  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/:showId' component={Details} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
