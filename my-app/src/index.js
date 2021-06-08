import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// const elem = (
    // <div>
         {/* <h2>Hello World</h2>
        <input type="text" placeholder="Type here" />
        <button/> */}
    // </div>
// )

const Header = () => {
    return  <h2>Hello World</h2>
    }

const Field = () => {
    const holder = "Enter here";
    const styleFild = {
        width: "300px"
    }
    return <input
        style={styleFild}
        type="text"
        placeholder={holder}
        autoComplete=""
        className="first"
        htmlFor=""/>
    }


const Btn = () => {
    // const text = "Log in";
    // const res = () => {
        // return "Log in, pleas";
    // }
    const text = "Log in";
    const logger = false;
    // return <button>{res()}</button>
    return <button>{logger ? "Enter" : text}</button>

    }

const App = () => {
    return ( 
        <div>
        <Field/>
        <Header/>
        <Btn/>
        </div>
    )
}



ReactDOM.render(<App/>,
//   <React.StrictMode>
    // <App/>,
//   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
