import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Station from './Station';
import App from './App';

// import reportWebVitals from './reportWebVitals';
// import Nav from './Nav'
// import Hero from './Hero';
// import Cart from './Cart'
// import Slider from './Slider'
// import Price from './Price'
// import Footer from './Footer'
// import Sain from './Sain';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Station/> */}
    {/* <Nav/>
    <Hero/>
    <Cart/>
    <Slider/>
    <Price/>
    <Footer/>*/}
    {/* <Sain/>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();