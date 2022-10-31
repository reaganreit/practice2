
import Header from "../Components/Header"

import { TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'; 

import { createTheme, ThemeProvider } from "@mui/material";
import ThreeColRow from "../Components/ThreeColRow";




const rows = [
  {id:1, item: "Butter Chicken", quantity: 20, sales: 30},
  {id:2, item: "Butter Chicken", quantity: 20, sales: 30},
  {id:3, item: "Butter Chicken", quantity: 20, sales: 30},
  {id:4, item: "Butter Chicken", quantity: 20, sales: 40},
  {id:5, item: "Butter Chicken", quantity: 20, sales: 40},
  {id:6, item: "Butter Chicken", quantity: 20, sales: 40},
  {id:7, item: "Butter Chicken", quantity: 20, sales: 40},
  {id:8, item: "Butter Chicken", quantity: 20, sales: 40},
  {id:9, item: "Butter Chicken", quantity: 20, sales: 40},
  {id:10, item: "Butter Chicken", quantity: 20, sales: 30}
]

const myTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&.Mui-selected": {
            backgroundColor: "rebeccapurple",
            color: "yellow",
            "&:hover": {
              backgroundColor: "purple"
            }
          }
        }
      }
    }
  }
});

const POSReport = ()=> {
  return (
    <div style={{ height: "100%"}}>
      <Header title = "Point of Sales Report"/>

      

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
              <ThreeColRow item = {"Item"} quantity = {"Quantity"} price = {"Sales"} />
            </div>
            

            {rows.map( (row) =>{
              return (
                <ThreeColRow item = {row.item} quantity = {row.quantity} price = {row.sales}/>
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

export default POSReport;




