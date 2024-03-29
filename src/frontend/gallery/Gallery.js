import React from 'react';
import shuffle from './gallery-shuffle';
import './Gallery.css';
import Cover from './cover/Cover';
import Loading from '../common/loading/Loading';

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { data: [], shuffleTime: undefined };
        this.shuffle = this.shuffle.bind(this);
    }

    async shuffle() {
        let startTime = this.getTime();
        let data = await shuffle(this.state.data);
        this.setState({ data: data });
        let endTime = this.getTime();
        this.setState({ shuffleTime: endTime - startTime });
    }

    getTime() {
        return new Date().getTime();
    }

    render() {
        fetch('/rest/best-movies')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
        return (
            <div>
                <div class='shuffle'>
                <button onClick={this.shuffle}>Shuffle</button>
                <label>{this.state.shuffleTime !== undefined ? 'Shuffle time: ' + this.state.shuffleTime + 'ms' : ''}</label>
                </div>
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