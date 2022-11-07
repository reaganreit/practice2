import Header from "../Components/Header";
import { TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material"
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

const ExcessReport = () => {
    return (
        <div style = {{ height: "100%" }}>
            <Header title = "Excess Report"></Header>   
            <div style = {{ height: "90%" }}>
                <div style={{display:"flex", marginTop: "2.5%", justifyContent:"space-evenly"}}>
                    <TextField size="small" label="Start Date" variant="outlined"/>
                    <TextField size="small" label="End Date" variant="outlined"/>
                </div>

                <DataGrid
                style={{ height: "80%", width: "60%", marginTop: "2.5%", marginLeft: "20%", backgroundColor:"blue", color:"white"}}

                hideFooter
                disableColumnMenu
                
                rows={rows}
                columns={columns}
                />

            </div>
            
        </div>
    )
}

export default ExcessReport;