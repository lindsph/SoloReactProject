import React from 'react';
import axios from 'axios';


class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            temperature: undefined,
            city: undefined,
            country: "CA",
            humidity: undefined,
            description: undefined,
            error: undefined
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // console.log('change');
        // console.log(event.target.value);
        // console.log(event.target.name);

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},CA&APPID=471cdaa149464c85637a4d7ef59bb5fd&units=metric`)
            .then((res) => {
                console.log(res);
                if (city) {
                    this.setState({
                        temperature: res.data.main.temp,
                        city: res.data.name,
                        humidity: res.data.main.humidity,
                        description: res.data.weather[0].description,
                    });
                } else {
                    this.setState({
                        temperature: undefined,
                        city: undefined,
                        humidity: undefined,
                        description: undefined,
                        error: "Please enter the values."
                    });
                }
            });
    }

    render() {
        const city = this.state.city;
        const temperature = this.state.temperature;
        const humidity = this.state.humidity;
        const conditions = this.state.description;

        return (
            <div className="weatherWidget">
                {this.state.temperature ?

                <div className="weatherInfo">
                    <p>Location: {city}</p>
                    <p>Temperature: {temperature}</p>
                    <p>Humidity: {humidity}</p>
                    <p>Conditions: {conditions}</p>
                </div>

                :
                <div className="formRequest">
                    <form action="" onSubmit={this.handleSubmit}>
                        <input type="text"
                        className="city"
                        id="city"
                        name="city"
                        placeholder="City.."
                        onChange={this.handleChange}
                        />
                        <div>Canada</div>
                        <button>Get Weather</button>
                    </form>
                </div>
                }
            </div>
            // end of div.weatherWidget
        )
    }
}

export default Weather;