import React from 'react';
import './App.css';
import Calculator from './component/Homepage/Calculator/Calculator';
import Copy from './component/Homepage/Copyright/Copy';
import Currency from './component/Homepage/Currency/Currency';
import Footer from './component/Homepage/Footer/Footer';
import Graph from './component/Homepage/Graph/Graph';
import More from './component/Homepage/More/More';
import Services from './component/Homepage/Services/Services';
import Steps from './component/Homepage/Steps/Steps';
import Testimonials from './component/Homepage/Testimonials/Testimonials';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="app">
      
      <div className="nav-container">
         <NavBar />
      </div>
      <Currency />
      <Graph />
      <Steps />
      <Services />
      <More />
      {/* <Testimonials /> */}
      <Calculator />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
