import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            weather: []
        }

        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
        this.getWeather();
    }

    getWeather() {
        axios.get('http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json') 
            .then((res) => {
                console.log(res.data);
                this.setState({
                    weather: res.data
                })
            });
    }

    render() {
        return (
            <div>
                <div>HEEEEELLLLOOOOOO</div>
            </div>
        )
    }
}

export default Weather;