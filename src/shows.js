import blackMirror from './gallery/cover/images/black-mirror.jpg';
import breakingBad from './gallery/cover/images/breaking-bad.jpg';
import deathNote from './gallery/cover/images/death-note.jpg';
import gameOfThrones from './gallery/cover/images/game-of-thrones.jpg';
import theWalkingDead from './gallery/cover/images/the-walking-dead.jpg';
import theWire from './gallery/cover/images/the-wire.jpg';

export default function getShows() {
    return [{
        id: 'black-mirror',
        title: 'Black Mirror',
        image: blackMirror
    }, {
        id: 'breaking-bad',
        title: 'Breaking Bad',
        image: breakingBad
    }, {
        id: 'death-note',
        title: 'Death Note',
        image: deathNote
    }, {
        id: 'game-of-thrones',
        title: 'Game of Thrones',
        image: gameOfThrones
    }, {
        id: 'the-walking-dead',
        title: 'The Walking Dead',
        image: theWalkingDead
    }, {
        id: 'the-wire',
        title: 'The Wire',
        image: theWire
    }];
}
