import React from 'react';
import { Redirect } from 'react-router-dom';
import getShows from '../shows';
import './Details.css';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let show = getShows()
            .find(show => show.id === this.props.match.params.showId);
        this.setState({ show });
    }

    render() {
        return (
            this.state.show ?
                <h1>{this.state.show.title}</h1> :
                <Redirect to='/not-found' />
        )
    }
}