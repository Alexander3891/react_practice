import './App.css';
import React from 'react';
import App2 from './App2';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    text: 'Hello',
    s1: '',
    s2: '',
    s3: ''
  }
}
// static getDerivedStateFromProps(props,state){
//   return {text: props.text2}
// }

static getDerivedStateFromProps(props,state){
  return {s1: props.a1, s2: props.a2}
}

componentDidMount(){
    setTimeout(() => {
      this.setState({s3: this.state.s2 * this.state.s1})
    },0)
  }
  
// componentDidMount(){
//   setTimeout(() => {
//     this.setState({text: 'Component did mount'})
//   },5000)
// }

render(){
  return(
    <div>
      <App2 s3={this.state.s3}/>
      <p>{this.state.text}</p>
      <p>{this.state.s1}</p>
      <p>{this.state.s2}</p>
      <p>{this.state.s3}</p>


      </div>
  )
}
}

export default App;
