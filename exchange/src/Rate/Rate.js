import React from 'react';
import './Rate.css';


class Rate extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    //     }
    render() {
        return (
            <div className="rate">
                  <h3>Курс валют на 30 ноября 2020</h3>
        <div className="flex-container">
            <div className=" block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Кг</div>
                <div className="currency-out">1200Кг</div>
            </div>
            {/* <div className=" block flex-item">
                <div className="currency-out">1200Кг</div>
            </div> */}
            <div className=" block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Кг</div>
                <div className="currency-out">1200Кг</div>
            </div>
            <div className=" block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Кг</div>
                <div className="currency-out">1200Кг</div>
            </div>
                </div>
                </div>
        );
    }
}

export default Rate;
