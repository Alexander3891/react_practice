import React from 'react';
import './Rate.css';


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        'date': '30-12-2020',
            'USD': '',
            'EUR': '',
            'RUR': '',
            'USD_buy': '',
            'EUR_buy': '',
            'RUR_buy': '',
            'USD_sale': '',
            'EUR_sale': '',
            'RUR_sale': '',
        
        }
        this.getRate();
        }
    getRate = () => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ USD: data[0].ccy })
                this.setState({EUR: data[1].ccy})
                this.setState({RUR: data[2].ccy})
                this.setState({USD_buy: data[0].buy })
                this.setState({EUR_buy: data[1].buy})
                this.setState({RUR_buy: data[2].buy })
                this.setState({USD_sale: data[0].sale })
                this.setState({EUR_sale: data[1].sale})
                this.setState({RUR_sale: data[2].sale})
            })
    }
    render() {
        return (
            <div className="rate">
                <h3>Курс валют на {this.state.date}</h3>
        <div className="flex-container">
            <div className=" block flex-item">
                        <div className="currency-name">{this.state.USD}</div>
                        <div className="currency-in">{this.state.USD_buy}</div>
                <div className="currency-out">{this.state.USD_sale}</div>
            </div>
            {/* <div className=" block flex-item">
                <div className="currency-out">1200Кг</div>
            </div> */}
            <div className=" block flex-item">
                <div className="currency-name">{this.state.EUR}</div>
                <div className="currency-in">{this.state.EUR_buy}</div>
                <div className="currency-out">{this.state.EUR_sale}</div>
            </div>
            <div className=" block flex-item">
                <div className="currency-name">{this.state.RUR}</div>
                <div className="currency-in">{this.state.RUR_buy}</div>
                <div className="currency-out">{this.state.RUR_buy}</div>
            </div>
                </div>
                </div>
        );
    }
}

export default Rate;
