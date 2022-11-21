import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext} from 'react'

 import { UserContext } from "./contexts/user";

import Checkout from "./Pages/Checkout";
import Inventory from "./Pages/Inventory";
import Pinpad from "./Pages/Pinpad";
import PopularCombos from "./Pages/PopularCombos";
import POSReport from "./Pages/POSReport";
import CustomerGUI from "./Pages/CustomerGUI";
import ExcessReport from "./Pages/ExcessReport";
import CashierGUI from "./Pages/CashierGUI";
import Statistics from "./Pages/Statistics";
import EditMenu from "./Pages/EditMenu";

const App= ()=> {
  const [ user,setUser ] = useState({})

  return (
    <BrowserRouter>
        <UserContext.Provider value = {{user,setUser}}>

          <Routes>

            <Route path="/" element={<Pinpad />} />
            <Route path="/posreport" element={<POSReport />} />
            <Route path="/pinpad" element={<Pinpad />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/popularcombos" element={<PopularCombos />} />
            <Route path="/excessreport" element={<ExcessReport />} />
            <Route path="/customergui" element={<CustomerGUI />} />
            <Route path="/cashiergui" element={<CashierGUI />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/editMenu" element = {<EditMenu />} />
          </Routes>
        </UserContext.Provider>

      </BrowserRouter>
    
  );
}

export default App;
