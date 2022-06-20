import React from 'react';
import './App.css';
import Calculator from './component/Calculator/Calculator';
import Copy from './component/Copyright/Copy';
import Currency from './component/Currency/Currency';
import Footer from './component/Footer/Footer';
import Graph from './component/Graph/Graph';
import More from './component/More/More';
import Services from './component/Services/Services';
import Steps from './component/Steps/Steps';
import NavBar from './component/NavBar/NavBar';
import Homepage from './component/Homepage/Homepage';

function App() {
  return (
    <div className="app">
      <div className="nav-container">
         <NavBar />
         <Homepage />
      </div>
      <Currency />
      <Graph />
      <Steps />
      <Services />
      <More />
      <Calculator />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
