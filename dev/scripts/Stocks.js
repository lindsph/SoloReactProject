import React from 'react';
import axios from 'axios';

const API_KEY = "YPRS7DNQBE6VCTQ3";

class Stocks extends React.Component {
    constructor() {
        super();
        this.state = {
            stockSymbol: "MSFT",
            stock: []
        }

        this.getStocks = this.getStocks.bind(this);
    }

    componentDidMount() {
        this.getStocks();
    }

    getStocks() {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockSymbol}&outputsize=full&apikey=${API_KEY}`)
            .then((res) => {
                // console.log(res.data);
                // console.log(Object.values(res.data));
                // console.log(Object.values(res.data)[0]);
                const data = Object.values(res.data)[0];
                const updatedData = Object.values(data);
                console.log(updatedData);
                // this.setState({
                //     news: res.data.articles
                // });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                stocks 
            </div>
        )
    }
}

export default Stocks;


// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(Object.values(object1));
// // expected output: Array ["somestring", 42, false]