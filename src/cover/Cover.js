import React from 'react';
import './Cover.css';

export default class Cover extends React.Component {

    render() {
        return (
            <div className='cover'>
                <img src={this.props.image} alt='' />
                <div className='cover-overlay'>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}