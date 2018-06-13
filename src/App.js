import React, { Component } from 'react';
import './App.css';
import theMistCover from './the-mist-cover.jpg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={theMistCover} className='image-cover' />
      </div>
    );
  }
}

export default App;
