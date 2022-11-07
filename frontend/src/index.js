import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import POSReport from './Pages/POSReport';
import Pinpad from './Pages/Pinpad';
import Checkout from './Pages/Checkout'
import Inventory from './Pages/Inventory';
import PopularCombos from './Pages/PopularCombos';
import CustomerGUI from './Pages/CustomerGUI';
import CashierGUI from './Pages/CashierGUI'
import ExcessReport from './Pages/ExcessReport'
import Statistics from './Pages/Statistics'


import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div style={{height:"100vh", margin: 0}}>

      <BrowserRouter>

            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/posreport" element={<POSReport />} />
              <Route path="/pinpad" element={<Pinpad />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/popularcombos" element={<PopularCombos />} />
              <Route path="customergui" element={<CustomerGUI/>}  />
              <Route path="cashiergui" element={<CashierGUI/>}  />
              <Route path="statistics" element={<Statistics/>}  />
              <Route path="excessreport" element={<ExcessReport/>}  />

            </Routes>
            {/* <POSReport/> */}
            {/* <Checkout/> */}
            {/* <Inventory/> */}
            {/* <PopularCombos/> */}
      </BrowserRouter>
    </div>

  </>
);


