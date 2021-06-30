import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Nav';

class App extends React.Component {
  render() {
    let nav2 = this.props.nav;
  return (
    <div className="App">
      <header>

          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      
      </header>
      <Nav nav2={nav2}  />

    </div>
  ); 
}
}



export default App;
