import { Button, TextField } from "@mui/material"
import { Grid } from '@mui/material';
import { useState } from "react";

const bowlList = [
    {id: 1, itemName: "Butter Chicken Bowl"},
    {id: 2, itemName: "Lemon Chicken Bowl"},
    {id: 3, itemName: "Veggie Bowl"},
    {id: 4, itemName: "Butter Chicken Bowl"},
    {id: 5, itemName: "Butter Chicken Bowl"}
]

const gyroList = [
    {id: 1, itemName: "Butter Chicken Gyro"},
    {id: 2, itemName: "Lemon Chicken Gyro"},
    {id: 3, itemName: "Veggie Gyro"},
    {id: 4, itemName: "Butter Chicken Gyro"},
    {id: 5, itemName: "Butter Chicken Gyro"}
]

const extraList = [
    {id: 1, itemName: "Hummus"},
    {id: 2, itemName: "Pita Bread"},
    {id: 3, itemName: "Falafel"},
]

const drinkList = [
    {id: 1, itemName: "Water"},
    {id: 2, itemName: "Fountain Drink"},
]


function extraMenu() {
    console.log("extra button clicked");
}

function drinkMenu() {
    console.log("drink button clicked");
}

const CustomerGUI = () => {
    const [results, setResults] = useState([])

    function bowlMenu() {
        setResults([...bowlList]);
    }

    function gyroMenu() {
        setResults([...gyroList]);
    }

    function extraMenu() {
        setResults([...extraList]);
    }

    function drinkMenu() {
        setResults([...drinkList]);
    }

    return (
        <div style = {{ width: "90%", height: "100%", marginLeft: "5%" }}>
            <div className="menuOptions" style={{ height: "7.5%", marginTop: "2.5%" }}>
                <Button onClick={bowlMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", marginLeft: "4.5%", backgroundColor: "blue", color: "white" }}>Bowl</Button>
                <Button onClick={gyroMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", backgroundColor: "blue", color: "white" }}>Gyro</Button>
                <Button onClick={extraMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", backgroundColor: "blue", color: "white" }}>Extra</Button>
                <Button onClick={drinkMenu} style = {{ height: "100%", width: "17.5%", backgroundColor: "blue", color: "white" }}>Drink</Button>
            </div>
            <div style = {{ height: "80%", marginTop: "2.5%", padding: "2.5%", backgroundColor: "lightgrey" }}>
                {/* <BowlMenuGrid /> */}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ height: "100%" }}>
                {results.map( elem => {
                     return (
                            <Grid item xs = {3} style={{ height: "20vw" }}>
                                <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>{elem.itemName}</Button>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <div style = {{ display: "flex", minHeight: "30%", marginTop: "2.5%", marginBottom: "10%", paddingTop: "2.5%", backgroundColor: "lightgrey" }}>
                <div style = {{ minHeight: "90%", width: "60%", marginLeft: "2.5%", backgroundColor: "whitesmoke" }}>
                    Itemized Receipt
                </div>
                <div style = {{ minHeight: "90%", width: "30%", marginLeft: "5%" }}>
                    <div style = {{ minHeight: "60%", width: "100%", paddingTop: "5%", backgroundColor: "whitesmoke" }}>
                        <div style = {{ height: "25%", width: "80%", marginLeft: "10%", backgroundColor: "lightgrey" }} >
                            Total: $X.XX
                        </div>

                        <Button style = {{ height: "25%", width: "80%", marginTop: "10%", marginLeft: "10%", backgroundColor: "blue", color: "white" }}>Checkout</Button>
                    </div>
                    <Button style = {{ maxHeight: "25%", width: "60%", marginTop: "2.5%", marginLeft: "20%", backgroundColor: "red", color: "white" }}>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default CustomerGUI;