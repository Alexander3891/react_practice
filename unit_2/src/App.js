import React from 'react';
import './App.css';
import Header from './Header/Header';
import Test from './Test';
import Goods from './Goods';


const headerData = {
    site_name: "my text site name",
    nav: [
        { "link": "nav1", "text": "my link 1" },
        {"link": "nav2", "text": "my link 2"},
        {"link": "nav3", "text": "my link 3"},
        ]       
};

const goods = [
    { "title": "apple", "cost": "330", "imag": "https://cdn2.iconfinder.com/data/icons/education-color-6/48/Education_Color-34-256.png" },
    { "title": "pear", "cost": "230", "imag": "https://cdn1.iconfinder.com/data/icons/kitchen-and-food-2/44/pear-256.png" },
    ];



function App() {
    return (
      <>
            <Test />
            <Header sitename="About React" data={headerData} />
            {goods.map(item =><Goods title={item.title} cost={item.cost} imag={item.imag}/>)}
         </>
  );
}

export default App;
