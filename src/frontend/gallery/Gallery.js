import React from 'react';
import shuffle from './gallery-shuffle';
import './Gallery.css';
import Cover from './cover/Cover';
import Loading from '../common/loading/Loading';

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { data: [] };
        this.shuffle = this.shuffle.bind(this);
    }

    shuffle() {
        this.setState(prevState => ({
            data: shuffle(prevState.data)
        }));
    }

    render() {
        fetch('/rest/best-movies')
            .then(response => response.json())
            .then(data => this.setState({ data }));
        return (
            <div>
                <button class='shuffle' onClick={this.shuffle}>Shuffle</button>
                <div class='gallery'>
                    {
                        this.state.data.length ?
                            this.state.data.map((show, index) => {
                                return <Cover key={index} id={show.id} title={show.title} />;
                            }) :
                            <Loading />
                    }
                </div>
            </div>
        );
    }
}