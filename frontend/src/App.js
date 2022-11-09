import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext} from 'react'

// import { UserContext } from "../contexts/total";

import Checkout from "./Pages/Checkout";
import Inventory from "./Pages/Inventory";
import Pinpad from "./Pages/Pinpad";
import PopularCombos from "./Pages/PopularCombos";
import POSReport from "./Pages/POSReport";
import CustomerGUI from "./Pages/CustomerGUI";

const App= ()=> {
  return (
    <Pinpad />
    
  );
}

export default App;
