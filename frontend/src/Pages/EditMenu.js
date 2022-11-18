import Header from "../Components/Header";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from "@mui/material";

const EditMenu = () => {
    return (
        <div style = {{ height: "100%" }}>
            <Header title = "Edit Menu" path = "/cashiergui"></Header>   
            <div style = {{ height: "90%", paddingBottom: "2.5%" }}>
                <div className="addItem" style = {{ height: "30%", width: "80%", marginLeft: "10%", marginTop: "2.5%", backgroundColor: "lightgrey"}}>
                    <h2 style = {{ paddingTop: ".75%", textAlign: "center" }}>Add Item</h2>
                    <span style = {{ display: "flex"}}>
                        <div style = {{ width: "60%", height: "70%", marginLeft: "10%"}}>
                            <article style = {{ marginTop: "3%", marginBottom: "2%" }}>
                                <TextField size="small" label="Name of Item" variant="filled" style = {{ width: "60%", marginRight: "5%", backgroundColor: "white"}}/>
                                <TextField size="small" label="Price of Item" variant="filled" 
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                    style = {{ width: "30%", marginRight: "5%", backgroundColor: "white"}} />
                            </article>
                            <TextField size="small" label="Ingredients of Item" variant="filled" style = {{ width: "95%", marginRight: "5%", backgroundColor: "white"}}/>
                        </div>
                        <Button style = {{ height: "7.5%", width: "10%", marginLeft: "5%", marginTop: "4%", color: "white", backgroundColor: "blue" }}>Add Item</Button>
                    </span>
                </div>
                <div className="deleteItem" style = {{ height: "30%", width: "80%", marginLeft: "10%", marginTop: "2.5%", backgroundColor: "lightgrey", textAlign: "center" }}>
                    <h2 style = {{ paddingTop: ".75%" }}>Delete Item</h2>
                    <div>
                        <TextField size="small" label="Name of Item" variant="filled" style = {{ width: "50%", marginTop: "4%", marginRight: "5%", backgroundColor: "white"}}/>
                        <Button style = {{ height: "10%", width: "10%", marginLeft: "3.5%", marginTop: "4.5%", color: "white", backgroundColor: "blue" }}>Delete Item</Button>
                    </div>
                </div>
                <div className="editItem" style = {{ height: "30%", width: "80%", marginLeft: "10%", marginTop: "2.5%", backgroundColor: "lightgrey", textAlign: "center" }}>
                    <h2 style = {{ paddingTop: ".75%" }}>Edit Item</h2>
                    <div>
                        <TextField size="small" label="Name of Item" variant="filled" style = {{ width: "40%", marginTop: "4%", marginRight: "3.5%", backgroundColor: "white"}}/>
                        <TextField size="small" label="New Price" variant="filled" 
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            style = {{ width: "15%", marginTop: "4%", backgroundColor: "white"}} />
                        <Button style = {{ height: "10%", width: "10%", marginLeft: "3.5%", marginTop: "4.5%", color: "white", backgroundColor: "blue" }}>Delete Item</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EditMenu;