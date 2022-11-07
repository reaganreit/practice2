import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Components/Header"

import Checkout from "./Pages/Checkout";
import Inventory from "./Pages/Inventory";
import Pinpad from "./Pages/Pinpad";
import PopularCombos from "./Pages/PopularCombos";
import POSReport from "./Pages/POSReport";

const App= ()=> {
  return (
    <div style={{backgroundColor:"teal", height: "100%"}}>
      <Header title = "This is a title"/>

      <h1 style = {{textAlign: "center"}}>App Starts here</h1>

      <Link to="/checkout" style={{textDecoration:"none"}} >
        <Button variant = "contained">Checkout</Button>
      </Link>

      <Link to="/inventory" style={{textDecoration:"none"}} >
        <Button variant = "contained">Inventory</Button>
      </Link>

      <Link to="/pinpad" style={{textDecoration:"none"}} >
        <Button variant = "contained">Pinpad</Button>
      </Link>

      <Link to="/popularcombos" style={{textDecoration:"none"}} >
        <Button variant = "contained">PopularCombos</Button>
      </Link>

      <Link to="/posreport" style={{textDecoration:"none"}} >
        <Button variant = "contained">POSReport</Button>
      </Link>

      <Link to="/excessreport" style={{textDecoration:"none"}} >
        <Button variant = "contained">Excess Report</Button>
      </Link>
    </div>
  );
}

export default App;
