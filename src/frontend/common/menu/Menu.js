import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from './menu.svg';
import tvIcon from './tv.svg';
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
                    <img src={menuIcon} alt='Open menu' />
                </button>
                <div className='menu-panel'>
                    <div className='menu-panel-box'>
                        <Link 
                            to='/manage/tv-shows' 
                            className='menu-panel-box-link'
                            onClick={() => this.toggleMenu()}>
                            <div>
                                <img src={tvIcon} alt='Manage TV shows' />
                            </div>
                            <div><h3>Manage TV Shows</h3></div>
                        </Link>
                    </div>
                    <div 
                        className='menu-panel-overlay' 
                        onClick={() => this.toggleMenu()} />
                </div>
            </div>
        );
    }
}