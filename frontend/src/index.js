import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import CashierGUI from './Pages/POSReport'
import POSReport from './Pages/POSReport';
import Inventory from './Pages/Inventory';
import Statistics from './Pages/Statistics';
import ExcessReport from  './Pages/ExcessReport';import CashierGUI from './Pages/CashierGUI';
import CustomerGUI from './Pages/CustomerGUI'

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
              <Route path="/excessreport" element={<ExcessReport />} />
            </Routes>
            {/* <POSReport/> */}
            {/* <Checkout/> */}
            {/* <Inventory/> */}
            {/* <PopularCombos/> */}
      </BrowserRouter>

    </div>

  <div style={{height:"100vh", margin: 0}}>
    {/* <App /> */}
    <CustomerGUI />
  </div>
    
  </>
);