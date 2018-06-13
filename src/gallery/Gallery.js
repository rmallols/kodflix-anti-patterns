import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import blackMirror from './cover/images/black-mirror.jpg';
import breakingBad from './cover/images/breaking-bad.jpg';
import deathNote from './cover/images/death-note.jpg';
import gameOfThrones from './cover/images/game-of-thrones.jpg';
import theWalkingDead from './cover/images/the-walking-dead.jpg';
import theWire from './cover/images/the-wire.jpg';

export default class Gallery extends React.Component {

    render() {
        return (
            <div className='gallery'>
                <div className='gallery-row'>
                    <Cover image={blackMirror} title='Black Mirror' />
                    <Cover image={breakingBad} title='Breaking Bad' />
                    <Cover image={deathNote} title='Death Note' />
                </div>
                <div className='gallery-row'>
                    <Cover image={gameOfThrones} title='Game of Thrones' />
                    <Cover image={theWalkingDead} title='The Walking Dead' />
                    <Cover image={theWire} title='The Wire' />
                </div>
            </div>
        );
    }
}