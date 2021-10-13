import React from 'react';
import './App.css';
import Currency from './component/Homepage/Currency/Currency';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="app">
      
      <div className="nav-container">
         <NavBar />
      </div>
      <Currency />
    </div>
  );
}

export default App;
