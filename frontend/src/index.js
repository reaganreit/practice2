import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import POSReport from './Pages/POSReport';
import Pinpad from './Pages/Pinpad';
import Checkout from './Pages/Checkout'
import Inventory from './Pages/Inventory';
import PopularCombos from './Pages/PopularCombos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div style={{height:"100vh", margin: 0}}>
    {/* <App /> */}
      {/* <POSReport/> */}
      {/* <Checkout/> */}
      {/* <Inventory/> */}
      <PopularCombos/>
  </div>
    
  </>
);


