import React from 'react';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'Navigation',
            subtitle:'Main menu',
            show:'show',
            text:'',
            age: 0
        }
    }
    showNaw = () => {
       this.setState({show: "hide"});
    }

    myInput = (e) =>{
        this.setState({[e.target.name]:e.target.value});

    }
    submitForm =(e) => {
        e.preventDefault();
    }
  render() {
      let a = ''
      if(this.state.text){
        a = <p>Your text: {this.state.text}</p>
      }
      else{
        a = '';
     }
     let nav3 = this.props.nav2;
    return (
         <nav>
             <button type="button" onClick={this.showNaw}>Show menu</button>
             <h1>{this.state.title}</h1>
             <h2>{this.state.subtitle}</h2>
             <p>{this.state.show}</p>
             <form onSubmit={this.submitForm}>
               <input onChange={this.myInput} name="text"/>
               <input onChange={this.myInput} type="number" name="age"/>
               <input type="submit"/>
           <p>Age:{this.state.age}</p>
            </form>
            <p>{a}</p>
            <ul>
               {Object.keys(nav3).map(elem => {
                  return <li><a href="{nav3[elem]}">{elem}</a></li>;
                })} 
            </ul>
        </nav>
    );   
  }
}



export default Nav;