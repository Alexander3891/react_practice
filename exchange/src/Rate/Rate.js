import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        'data': '',      
        'currencyRate': {}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP']
        this.getRate();
        }

    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=e99be8401a607f457037e674286f1c89')
            .then(data => {
                return data.json();
            })
            .then(data => {
            this.setState({date: data.date});
          let result = {};
          for(let i = 0; i < this.currency.length; i++){
          result[this.currency[i]] = data.rates[this.currency[i]]
         }
         this.setState({currencyRate: result});

      });  
     
            
    }
    render() {
        return (
            <div className="rate">
                <h3>Курс валют на {this.state.date}</h3>
                
            <div className="flex-container">
                {Object.keys(this.state.currencyRate).map( (keyName,i) =>
                (
                         <div className=" block flex-item" key={keyName}>
                        <div className="currency-name">{keyName}</div>
                        <div className="currency-in">{Number(this.state.currencyRate[keyName]).toFixed(2)}</div>
                        <p>* Можно купить за 1 EUR</p>            
            </div>
                )
                )}
                
                </div>
                <Calc us={this.state.USD_buy}/>
                </div>
        );
    }
}

export default Rate;
