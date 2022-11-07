import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import POSReport from './Pages/POSReport';
import Pinpad from './Pages/Pinpad';
import Checkout from './Pages/Checkout'
import Inventory from './Pages/Inventory';
import PopularCombos from './Pages/PopularCombos';

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
            </Routes>
            {/* <POSReport/> */}
            {/* <Checkout/> */}
            {/* <Inventory/> */}
            {/* <PopularCombos/> */}
      </BrowserRouter>
    </div>

  </>
);


