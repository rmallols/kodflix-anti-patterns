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
        image: blackMirror,
        synopsis: `
            An anthology series exploring a twisted, high-tech world where 
            humanity's greatest innovations and darkest instincts collide.`
    }, {
        id: 'breaking-bad',
        title: 'Breaking Bad',
        synopsis: `
            A high school chemistry teacher diagnosed with inoperable 
            lung cancer turns to manufacturing and selling methamphetamine 
            in order to secure his family's future.`,
        image: breakingBad
    }, {
        id: 'death-note',
        title: 'Death Note',
        image: deathNote,
        synopsis: `
            An intelligent high school student goes on a secret crusade 
            to eliminate criminals from the world after discovering a 
            notebook capable of killing anyone whose name is written into it.`
    }, {
        id: 'game-of-thrones',
        title: 'Game of Thrones',
        image: gameOfThrones,
        synopsis: `
            Nine noble families fight for control over the mythical 
            lands of Westeros, while an ancient enemy returns after 
            being dormant for thousands of years.`
    }, {
        id: 'the-walking-dead',
        title: 'The Walking Dead',
        image: theWalkingDead,
        synopsis: `
            A Walking Dead spin-off, set in Los Angeles, following two 
            families who must band together to survive the undead apocalypse.`
    }, {
        id: 'the-wire',
        title: 'The Wire',
        image: theWire,
        synopsis: `
            Baltimore drug scene, seen through the eyes of 
            drug dealers and law enforcement.`
    }];
}
