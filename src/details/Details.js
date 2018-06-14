import React from 'react';
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
            <h1>{this.state.show.title}</h1>
        )
    }
}