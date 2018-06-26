import React from 'react';
import MenuIcon from './Menu.svg';
import './Menu.css';

export default class Menu extends React.Component {

    constructor() {
        super();
        this.state = { isMenuVisible: false };
    }

    toggleMenu() {
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }

    render() {
        return (
            <div className={
                'menu ' + (this.state.isMenuVisible ? 'is-visible' : '')
            }>
                <button
                    className='menu-toggle'
                    onClick={() => this.toggleMenu()}>
                    <img src={MenuIcon} alt='Open menu' />
                </button>
                <div className='menu-panel'>
                    <div className='menu-panel-box'>Hello menu!</div>
                    <div 
                        className='menu-panel-overlay' 
                        onClick={() => this.toggleMenu()} />
                </div>
            </div>
        );
    }
}