import React from 'react';
import './App.css';
import './index.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'

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
                    <Rate/>
       
    </main>
</div>

<div className="container" id="cookie_info">
   <div className="site-content">
       <div className="well">На нашем сайте мы используем cookie для сбора информации
            технического характера.<br/> В частности, для персонифицированной работы сайта
            мы обрабатываем IP адрес региона вашего естоположения.&nbsp;
            <button className="btn btn-primary btn-sm">Ок</button></div>
   </div>
</div>

<Footer/>
</div>
       );
    }

}

export default App;
