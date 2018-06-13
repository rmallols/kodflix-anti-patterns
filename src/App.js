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
            <img src={blackMirror}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={breakingBad}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={deathNote} alt='' />
          </div>
        </div>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <img src={gameOfTHrones}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={theWalkingDead}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={theWire} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
