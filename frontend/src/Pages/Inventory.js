
import Header from "../Components/Header"

import { TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'; 

import { createTheme, ThemeProvider } from "@mui/material";
import FiveColRow from "../Components/FiveColRow";




const rows = [
  {id:1, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:2, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:3, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:4, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:5, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:6, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:7, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:8, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:9, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"},
  {id:10, item: "Butter Chicken", quantity: 20, prevQuantity: 30, lasthipment: "date 1", nextShipment: "date 2"}
]



const Inventory = ()=> {
  return (
    <div style={{ height: "100%"}}>
      <Header title = "Inventory"/>
      

      {/* A div which will have slight margins on both sides
      This will be achieved by making a div with display flex, and another div within that  */}

      <div style={{display:"flex", justifyContent:"center", marginTop:20}}>
        <div style={{width:"90%"}}>


          {/* A grid div which will contain the two text boxes */}
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <TextField size="small" label="Start Date" variant="outlined"/>

            <TextField size="small" label="End Date" variant="outlined"/>
          </div>

          {/* Start table here */}
          <div style={{height:"500px", overflowY:"scroll", border:"solid", borderWidth:2, borderColor:"blue", backgroundColor:"blue", marginTop:20}}>

            <div style={{borderBottom:'solid white 3px', position:"sticky",  top:0}}>
              <FiveColRow item = {"."} quantity = {"Quantity"} prevQuantity = {"Previous Quantity"}  lastShipment = {"Last Shipment"} nextShipment = {"Next Shipment"}/>
            </div>
            

            {rows.map( (row) =>{
              return (
                <FiveColRow item = {row.item} quantity = {row.quantity} prevQuantity = {row.prevQuantity} lastShipment = {row.lasthipment} nextShipment = {row.nextShipment} />
              )
            })}

          </div>

        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
  );
}

export default Inventory;




