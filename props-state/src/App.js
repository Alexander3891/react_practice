import React from 'react';
import './App.css';
import logo from './logo.svg';

const styles = {
  border: '2px solid green',  
  width: '85px',
  height: '20px',
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    text1:'',
    count: 0,
    inp: '',
    err: '',
    radio:'',
    select:'',
    styles2: {
      border: '2px solid blue',  
      width: '85px',
      height: '20px',
    },
    value:'0',
    styles3:{
      display: ''
    }
    

  
    }
  this.show1 = this.show1.bind(this);
  this.show2 = this.show2.bind(this);
  this.show3 = this.show3.bind(this);
  this.move = this.move.bind(this);
  this.show4 = this.show4.bind(this);
  this.show5 = this.show5.bind(this);
  this.show6 = this.show6.bind(this);
  this.show7 = this.show7.bind(this);
  this.show8 = this.show8.bind(this);
  this.show9 = this.show9.bind(this);
  this.show10 = this.show10.bind(this);
  this.show11 = this.show11.bind(this);
  this.show12 = this.show12.bind(this);

  }
  show1(){
    // console.log('button work');
    this.setState({text1: 'button work'});

  }
  show2(){
    // console.log('button work');
    this.setState({count: this.state.count+1});
  }
  show3(){
  this.setState({count: 0});
  }
move(){
console.log('move');
}

show4(e){
  console.log(e.target.name);
  }

  show5(e){
    // this.setState({inp: e.target.value})
    let {inp} = this.state;
    //  let err = inp.length > 2 ? "OK" : "ERROR";
    let {err} = this.state;
        err = inp.length;
     if(err < 6){
      this.setState({inp: e.target.value})
     }else{
      this.setState({inp: 'длина должна быть меньше 6'})

    }
  }
  show6(){
    console.log("checkbox checked");
  }

  show7(e){
    this.setState({radio: e.target.name});
  }
  show8(e){
    this.setState({select: e.target.value});
  }
show9(){
  this.setState({styles2:{
    border: '2px solid blue',  
    width:  '87px',
    height: '20px',  
  }});
}

show10(){

}

show11(e){
this.setState({value: e.target.value})
}
show12(){
  this.setState({styles3:{
    display: 'none'
  }});
}


  render(){
    
    return(
        <div>
          <button onClick={this.show1}>Click My</button>
          <p>{this.state.text1}</p>

          {/* //====================== */}
          <button onClick={this.show2}>Count</button>
          <p>{this.state.count}</p>
          <button onClick={this.show3}>ResetCount</button>

          {/* //====================== */}
          <div style={styles} onMouseMove={this.move}>Hello!</div>

          {/* //====================== */}
          <button onClick={this.show4} name="atr-1">atr1</button>
          <button onClick={this.show4} name="atr-2">atr2</button>

          {/* //====================== */}
          <p>{this.state.inp}</p>
          <input onChange={this.show5}/>

          {/* //====================== */}
          <input onChange={this.show6} type="checkbox"/>
          <br/>

          {/* //====================== */}
          <input onChange={this.show7} type="radio" name="1"/>
          <input onChange={this.show7} type="radio" name="2"/>
          <input onChange={this.show7} type="radio" name="3"/>
          <p>{this.state.radio}</p>

          {/* //====================== */}
          <select onChange={this.show8}>
                <option >Пункт 1</option>
                <option >Пункт 2</option> 
                <option >Пункт 3</option> 
                <option>Пункт 4</option> 
         </select>
         <p>{this.state.select}</p>

          {/* //====================== */}
          <div style={this.state.styles2}>1</div>
          <button onClick={this.show9}>Click my</button>
          <button onClick={this.show10}>Reset</button>
          
          {/* //====================== */}
         <p> <input onChange={this.show11} type="range" min="1" max="100" value={this.state.value}/></p> 
         <p>{this.state.value}</p>

        {/* //====================== */}
        <img src={logo} style={this.state.styles3} width="100" height="100" alt="Пример"/>
        <p><button onClick={this.show12}>Hide img</button></p>

        </div>
     )  

   }
 }

//====================================
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     text: 'Hello',
//     text2:'555'  
//     }
//     this.showText = this.showText.bind(this);
//     this.showText2 = this.showText2.bind(this);
  
//   }
//   showText() {
//     console.log('it work');
//     this.setState({
//       text: 'hi'});
//   }
//   showText2(e) {
//     // console.log('it work2');
//     this.setState({text2: e.target.value}) 
//     console.log(e.target.value);
//   }
// move(e){
//   console.log(e.target.textContent);
// }

//   render(){
//      return(
//         <div>
//           <button onClick={this.showText}>push1</button>
//           <input defaultValue={this.state.text} onInput={this.showText2}/>
//           <div onMouseMove={this.move}>Lorem</div>
//           <p>{this.state.text}</p>
//           <p>{this.state.text2}</p>
//         </div>
//      )  
//   }
// }

export default App;
