import React, { Component } from 'react';
import './App.css';
import blackMirror from './covers/black-mirror.jpg';
import breakingBad from './covers/breaking-bad.jpg';
import deathNote from './covers/death-note.jpg';
import gameOfTHrones from './covers/game-of-thrones.jpg';
import theWalkingDead from './covers/the-walking-dead.jpg';
import theWire from './covers/the-wire.jpg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <h1>Black Mirror</h1>
          </div>
          <div className='image-cover-row-item'>
            <h1>Breaking Bad</h1>
          </div>
          <div className='image-cover-row-item'>
            <h1>Death Note</h1>
          </div>
        </div>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <h1>Game of Thrones</h1>
          </div>
          <div className='image-cover-row-item'>
            <h1>The Walking Dead</h1>
          </div>
          <div className='image-cover-row-item'>
            <h1>The Wire</h1>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
