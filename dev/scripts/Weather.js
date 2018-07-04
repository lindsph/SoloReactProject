import React from 'react';
import axios from 'axios';


class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            temperature: undefined,
            city: "",
            country: "CA",
            humidity: undefined,
            description: undefined,
            latitude: undefined,
            longitude: undefined,
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
                this.setState({
                    temperature: res.data.main.temp,
                    city: res.data.name,
                    humidity: res.data.main.humidity,
                    description: res.data.weather[0].description,
                    latitude: res.data.coord.lat,
                    longitude: res.data.coord.lon
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: "Please enter a valid Canadian city!"
                })
            })
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
                        <p className="city">{city}</p>
                        <p className="exactLocation">
                            <span>Latitude: {this.state.latitude} </span>  
                            <span>Longitude: {this.state.longitude}</span>
                        </p>
                        <p className="conditions">{conditions} {temperature}°C</p>
                        <p className="conditions">Humidity: {humidity}%</p>
                    </div>

                    : null }
                    <div className="formRequest">
                        {this.state.error !== undefined ?
                        <p className="errorMessage">{this.state.error}</p>
                        : null}
                        <form 
                        className="wrapper"
                        onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                className="input"
                                id="city"
                                name="city"
                                placeholder="Enter City.."
                                onChange={this.handleChange}
                            />
                            <span className="underline"></span>
                            <button>Get Weather</button>
                        </form>
                    </div>
            </div>
            // end of div.weatherWidget
        )
    }
}

export default Weather;