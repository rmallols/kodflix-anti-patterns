import React from 'react';
import MenuIcon from './Menu.svg';
import './Menu.css';

export default class Menu extends React.Component {

    openMenu() {
        console.log('CLICKED!');
    }

    render() {
        return (
            <div className='menu'>
                <button className='menu-open' onClick={() => this.openMenu()}>
                    <img src={MenuIcon} alt='Open menu' />
                </button>
            </div>
        );
    }
}