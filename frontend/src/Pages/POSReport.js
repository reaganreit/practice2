import Header from "../Components/Header"

import { TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'; 

const columns = [
  {field: 'id', headerName: 'ID', flex: 1, hide:true},
  {field: 'item', headerName: 'Item', flex: 1},
  {field: 'quantity', headerName: 'Quantity', flex: 1},
  {field: 'sales', headerName: 'Sales', flex: 1}
]

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

          {/* Start grid here */}
          <div style={{ height: 450, marginTop:20}}>
            <DataGrid
              style={{backgroundColor:"blue", color:"white"}}

              hideFooter
              disableColumnMenu
              
              rows={rows}
              columns={columns}


              
              
            />
          </div>

        </div>
      </div>

      
      
    </div>
  );
}

export default POSReport;
