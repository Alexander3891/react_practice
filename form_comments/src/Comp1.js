import React from 'react';

class Comp1 extends React.Component {
    constructor(){
        super();
        this.state = {
           count: 0,
           coment: []    
        }
        this.myRef = React.createRef(); 
    }
    
    handler = () => {
         let currentCount = this.state.count;
         currentCount++;
         this.setState({
             count: currentCount
         })
}
    addComent = ()=>{
    let coment1 = this.myRef.current.value; 
    let coments = this.state.coment;
    coments.push(coment1);
    this.setState({
        'coments': coments 
    });
    this.myRef.current.value = '';
}

   render(){
       return(
           <>
           <h1>State: {this.state.count}</h1>
           <div>
               <button onClick={this.handler}>This button change state</button>
           </div>
          <div>
              <textarea ref={this.myRef}></textarea>
           </div>
           <div> 
              <button onClick={this.addComent}>Add coment</button>
           </div>
           <div>
              <ul>
                  {this.state.coment.map(item => <li>{item}</li>)}
              </ul>
           </div>
           </>
       )
   }
}



export default Comp1;