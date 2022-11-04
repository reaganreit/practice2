import Header from "../Components/Header"

import { Button, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'; 

import { createTheme, ThemeProvider } from "@mui/material";
import ThreeColRow from "../Components/ThreeColRow";

import { useState } from "react";

const Checkout = ()=> {

    const [total, setTotal] = useState(200);

  return (
    <div style={{ height: "100%" }}>
        <Header title = "Checkout"/>
        
            

        <h1 style={{ textAlign:"center"}} > Order: ${total} </h1>
        <h1 style={{ textAlign:"center"}} > Tax: ${total * 0.2} </h1>
        <h1 style={{ textAlign:"center"}} > Total: ${total * 1.2} </h1>

        
        <br/>
        <br/>
        <br/>
        <br/>

        <div style = {{display:"flex", justifyContent:"center", width:"100%"}}>
            <div style = {{width:"80%", maxHeight:"50vh", overflowY:"scroll", border:"solid"}}>
                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
                <h1>Item 4</h1>
                <h1>Item 5</h1>

                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
                <h1>Item 4</h1>
                <h1>Item 5</h1>
                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
                <h1>Item 4</h1>
                <h1>Item 5</h1>
                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
                <h1>Item 4</h1>
                <h1>Item 5</h1>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>


        {/* Three centered divs */}
        <div style = {{width: "100%", display:"flex", justifyContent:"center"}} >

            <div style = {{width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
                <div style ={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" style = {{height:"60px"}}> Credit/Debit card </Button>
                </div>

                <div style ={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" style = {{height:"60px"}}> Meal Swipes </Button>
                </div>

                <div style ={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" style = {{height:"60px"}}> Dining Dollars </Button>
                </div>
            </div>

        </div>

        <div style = {{width: "100%", display:"flex", justifyContent:"center", marginTop:"10vh"}} >

                <div style ={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" style = {{height:"60px"}}> Cancel Order </Button>
                </div>

        </div>
            

        <br/>
        <br/>
        <br/>
        <br/>
      
    </div>
  );
}

export default Checkout;




