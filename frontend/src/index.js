import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CashierGUI from './Pages/POSReport'
import POSReport from './Pages/POSReport';
import Inventory from './Pages/Inventory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div style={{height:"100vh", margin: 0}}>
    {/* <App /> */}
      {/* <POSReport/> */}
    <Inventory />
  </div>
    
  </>
);


