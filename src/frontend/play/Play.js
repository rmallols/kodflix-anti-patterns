import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../common/loading/Loading';
import './Play.css';

export default class Play extends React.Component {

    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let showId = this.props.match.params.showId;
        fetch(`/rest/best-movies/${showId}`)
            .then(response => response.json())
            .then(show => this.setState({ show }));
    }

    render() {
        let show = this.state.show;
        if (show) {
            return show.id ?
                <PlayContent show={show} /> :
                <Loading />;
        } else {
            return <Redirect to='/not-found' />;
        }
    }
}

function PlayContent({ show }) {
    return (
        <div className='play'>
            <iframe width='100%' height='100%' title='Watch!'
                src={`http://www.youtube.com/embed/${show.videoId}?autoplay=1&showinfo=0&mute=1`}>
            </iframe>
        </div>
    )
}