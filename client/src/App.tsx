import React from 'react';
import './App.css';
import Currency from './component/Homepage/Currency/Currency';
import Graph from './component/Homepage/Graph/Graph';
import Steps from './component/Homepage/Steps/Steps';
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
    </div>
  );
}

export default App;
