import Header from "../Components/Header";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {field: 'id', headerName: 'ID', flex: 1, hide:true},
  {field: 'item', headerName: 'Item', flex: 1},
  {field: 'quantity', headerName: 'Quantity (kg)', flex: 1},
  {field: 'previousQuantity', headerName: 'Previous Quantity (kg)', flex: 1},
  {field: 'lastShipment', headerName: 'Last Shipment', flex: 1},
  {field: 'nextShipment', headerName: 'Next Shipment', flex: 1}
]

const rows = [
    {id:1, item: "Chicken", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:2, item: "Rice", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:3, item: "Bowls", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:4, item: "Veggies", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:5, item: "Fries", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:6, item: "Water", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:7, item: "Drink", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:8, item: "Hummus", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:9, item: "Pita", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:10, item: "Falafel", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
    {id:11, item: "Cups", quantity: 20, previousQuantity: 50, lastShipment: "2022-10-12", nextShipment: "2022-10-30"},
]

const Inventory = () => {
  return (
    <div style={{height: "100%"}}>
        <Header title = "Inventory"></Header>

        <div style={{display:"flex", justifyContent:"center", marginTop:20}}>
            <div style={{width:"90%"}}>

                {/* Start grid here */}
                <div style={{ height: 600, marginTop:20}}>
                    <DataGrid

                    sx = {{
                        backgroundColor : 'blue',
                        color: 'white',
                    }}

                    hideFooter
                    disableColumnMenu
                    
                    rows={rows}
                    columns={columns} 
                    
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inventory;
