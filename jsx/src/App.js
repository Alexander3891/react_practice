import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    number(j) {
        for (let i = 0; i < 100; i++) {
            return ++j;
        }
    }

    render() {
        let r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256)),
            colorCheng = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        const styles = {
            color: '',
            backgroundColor: colorCheng,
            width: '100px',
        }
        const styles2 = {
            backgroundColor: 'white',
            width: '100px',
        }
        const styles3 = {
            color: 'white',
            backgroundColor: 'black',
            width: '100px',
        }

        let a = [1, 2, 3, 4, 5];
        b = [1, 0, 1, 0];
        return (
      <div>
                <div style={styles}>1</div>
                {/* ===================================== */}
                <div>{Math.floor(Math.random() * (60 - 50)) + 50}</div>
                {/* ===================================== */}
                <div>{a.map(elem => {
                    return <p key={elem}>{elem}</p>;
                })}</div>
                {/* ===================================== */}
                <div>{b.map(elem => {
                    if (elem === 1) {
                    return <div style={styles2} key={elem}>{elem}</div>;
                    } else {
                    return <div style={styles3} key={elem}>{elem}</div>;
                    }
                })}</div>
                <div>{this.number(1)}</div>
          
    </div >
  );      
    }
  
}

export default App;
