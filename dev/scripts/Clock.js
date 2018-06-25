import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date(),
            greet: ""
        }

        // let time = this.state.time;
        // console.log(time);
        // console.log(time.toDateString());
    }

    componentWillMount() {
        setInterval(() => this.currentTime(), 1000)
    }

    currentTime() {
        this.setState ({
            time: new Date()
        })
    }

    currentTime() {
        const hour = this.state.time.getHours();
        let greet;
        if (hour < 12) greet = "morning";
        else if (hour >= 12 && hour < 17) greet = "afternoon";
        else if (hour >= 17 && hour <= 24) greet = "evening";
        this.setState({
            time: new Date(),
            greet
        });
    }

    render() {
        let time = this.state.time;
        return (
            <div className="greet">
                <div className="time">{time.toLocaleTimeString()}</div>
                <div className="date">{time.toDateString()}</div>
                <div className="greeting">Good {this.state.greet}, {this.props.userName}</div>
                
            </div>
        )
    }
}

export default Clock;