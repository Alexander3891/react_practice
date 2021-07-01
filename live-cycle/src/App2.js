import React from 'react';

class App2 extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      z1:'0',
      y1:'0'
      }
    }
    static getDerivedStateFromProps(props,state){
        return {z1: props.s3}
      }

      componentDidMount(){
        setTimeout(() => {
          this.setState({y1: this.state.z1*10})
        },0)
      }
    
    render(){
      return(
        <div>
         <p>{this.state.z1}</p>
         <p>{this.state.y1}</p>
    
          </div>
      )
    }
    }
    
    export default App2;