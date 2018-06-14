import blackMirror from './cover/images/black-mirror.jpg';
import breakingBad from './cover/images/breaking-bad.jpg';
import deathNote from './cover/images/death-note.jpg';
import gameOfThrones from './cover/images/game-of-thrones.jpg';
import theWalkingDead from './cover/images/the-walking-dead.jpg';
import theWire from './cover/images/the-wire.jpg';

export default function getGallery() {
    return [{
        id: 'black-mirror',
        text: 'Black Mirror',
        image: blackMirror
    }, {
        id: 'breaking-bad',
        text: 'Breaking Bad',
        image: breakingBad
    }, {
        id: 'death-note',
        text: 'Death Note',
        image: deathNote
    }, {
        id: 'game-of-thrones',
        text: 'Game of Thrones',
        image: gameOfThrones
    }, {
        id: 'the-walking-dead',
        text: 'The Walking Dead',
        image: theWalkingDead
    }, {
        id: 'the-wire',
        text: 'The Wire',
        image: theWire
    }];
}
