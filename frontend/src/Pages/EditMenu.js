import Header from "../Components/Header";
import { TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid'; 
import ThreeColRow from "../Components/ThreeColRow";

const EditMenu = () => {
    return (
        <div style = {{ height: "100%" }}>
            <Header title = "Edit Menu" path = "/cashiergui"></Header>   
            <div style = {{ height: "90%", paddingBottom: "2.5%" }}>
                <div className="addItem" style = {{ height: "30%", width: "80%", marginLeft: "10%", marginTop: "2.5%", backgroundColor: "lightgrey", textAlign: "center"}}>
                    <h2 style = {{ paddingTop: ".75%" }}>Add Item</h2>
                </div>
                <div className="deleteItem" style = {{ height: "30%", width: "80%", marginLeft: "10%", marginTop: "2.5%", backgroundColor: "lightgrey", textAlign: "center" }}>
                    <h2 style = {{ paddingTop: ".75%" }}>Delete Item</h2>
                </div>
                <div className="editItem" style = {{ height: "30%", width: "80%", marginLeft: "10%", marginTop: "2.5%", backgroundColor: "lightgrey", textAlign: "center" }}>
                    <h2 style = {{ paddingTop: ".75%" }}>Edit Item</h2>
                </div>
            </div>
            
        </div>
    )
}

export default EditMenu;