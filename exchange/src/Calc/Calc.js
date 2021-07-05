import React from 'react';
import './Calc.css';


class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        
        }
        
        }
   
            
    
    render() {
        return (
         <div className="calculator">
              <h3>Калькулятор обмена</h3>
        <div className="block">
            <div className="title-block">Я хочу</div>
            <div className="radio-block"><lable><input type="radio" name="radio" defaultValue="0"/>
                купить</lable></div>
            <div>
            <div className="radio-block"><lable><input type="radio" name="radio" defaultValue="1"/>
                продать</lable></div>
            <div></div>
            
                <input className="input-block" type="number" defaultValue="150"/>
                <select name="" id="">
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                    <li>EUR 150</li>
                    <li>EUR 150</li>
                    <li>EUR 150</li>
                    <li>EUR 150</li>
                </ul>
            </div>
        </div>
             </div>
        );
    }
}

export default Calc;
