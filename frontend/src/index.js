import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import CashierGUI from './Pages/POSReport'
import POSReport from './Pages/POSReport';
import Inventory from './Pages/Inventory';
import Statistics from './Pages/Statistics';
import CashierGUI from './Pages/CashierGUI';
import CustomerGUI from './Pages/CustomerGUI'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div style={{height:"100vh", margin: 0}}>
    {/* <App /> */}
    <CustomerGUI />
  </div>
    
  </>
);