import React from 'react';
import axios from 'axios';

class Joke extends React.Component {
    constructor() {
        super();
        this.state = {
            joke: []
        }

    this.getJoke = this.getJoke.bind(this);
    }

    componentDidMount() {
        this.getJoke();
    }

    getJoke() {
        axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        })
            .then((res) => {
                // console.log(res);
                this.setState({
                    joke: res.data.joke
                })
            });
    }

    render() {
        return (
            <div className="jokeContainer">
                <div className="joke">"{this.state.joke}"</div>
                <button className="moreJokes" onClick={() => this.getJoke()}>Another?</button>
            </div>
        )
    }
}

export default Joke;