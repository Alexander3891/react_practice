import React from 'react';

// import About from './About';
// import Contacts from './Contacts';
// import Other from './Other';


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'Navigation',
            subtitle:'Main menu',
            show:'show',
            text:'',
            age: 0,
            value:'0',
            table:{
            border:'1px solid black',
            margin: 'auto',
            backgroundColor:'red'
            },
            text2:'',
            ege2: 0,
           randge:0,
           textarea:'',
           select:''
        }
  this.text_form = this.text_form.bind(this);
  this.age_form = this.age_form.bind(this);
  this.range_form = this.range_form.bind(this);
  this.submitForm2 = this.submitForm2.bind(this);


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

// ======================
text_form(e){
  this.setState({[e.target.name]:e.target.value});
}
age_form(){
 
}
range_form(e){
  this.setState({value: e.target.value})
}
textarea_form(){
  
}
select_form(){

}
submitForm2(e){
  e.preventDefault();

}
//==========================

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
      // npm install react-router
      // npm install react-router-dom
<div>
          {/* <Router>
           <div className="ty">
             <ul>
               <li><a href="/">Main page</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/contacts">Contacts</a></li>
             </ul>
             <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/contacts" component={Contacts}/>
               <Route component={Other}/>
             </Switch>
           </div>
         </Router> */}


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

            {/* //==================================================== */}
            <form onSubmit={this.submitForm2}>
               <input onChange={this.text_form} name="text2"/>
               <input onChange={this.text_form}_form type="number" name="age2"/>
               <input onChange={this.range_form} type="range" min="1" max="100" value={this.state.value} name="range"/>
               <textarea onChange={this.text_form}  name="textarea"/>
               <select onChange={this.text_form} name="select">
                <option >Пункт 1</option>
                <option >Пункт 2</option> 
                <option >Пункт 3</option> 
                <option>Пункт 4</option> 
         </select>
              <p><input type="submit"/></p>
              <table style={this.state.table}>
               <tr>
               <td>Text2:</td>
               <td>{this.state.text2}</td>
              </tr>
              <tr>
               <td>Age2:</td>
               <td>{this.state.age2}</td>
              </tr>
              <tr>
               <td>range:</td>
               <td>{this.state.value}</td>
              </tr>
              <tr>
               <td>textarea:</td>
               <td>{this.state.textarea}</td>
              </tr>
              <tr>
               <td>select:</td>
               <td>{this.state.select}</td>
              </tr>
              </table>

            </form>
        
        </nav>
    </div>
    );   
  }
}



export default Nav;