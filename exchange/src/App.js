import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'
import About from './About/About'
import Contact from './Contact/Contact'



class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    //     }
        render() {
            return ( 
    <div className="site">
        <Header />
                    
    <div className="container">
        <main>
             <Router>
                   <Switch>
                    <Route exact path="/" component={Rate}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                   </Switch>
            </Router>
        </main>
    </div>

<div className="container" id="cookie_info">
   <div className="site-content">
       <div className="well">На нашем сайте мы используем cookie для сбора информации
            технического характера.<br/> В частности, для персонифицированной работы сайта
            мы обрабатываем IP адрес региона вашего местоположения.&nbsp;
            <button className="btn btn-primary btn-sm">Ок</button></div>
   </div>
</div>

<Footer/>
</div>
       );
    }

}

export default App;
