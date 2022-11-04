import { Button, TextField } from "@mui/material"
import { Grid } from '@mui/material';
import BowlMenuGrid from "../Components/BowlMenuGrid";

function bowlMenu() {

    console.log("bowl button clicked");
}

function gyroMenu() {
    console.log("gyro button clicked");
}

function extraMenu() {
    console.log("extra button clicked");
}

function drinkMenu() {
    console.log("drink button clicked");
}

const CustomerGUI = () => {
    return (
        <div style = {{ width: "90%", height: "100%", marginLeft: "5%" }}>
            <div className="menuOptions" style={{ height: "7.5%", marginTop: "2.5%" }}>
                <Button onClick={bowlMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", marginLeft: "4.5%", backgroundColor: "blue", color: "white" }}>Bowl</Button>
                <Button onClick={gyroMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", backgroundColor: "blue", color: "white" }}>Gyro</Button>
                <Button onClick={extraMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", backgroundColor: "blue", color: "white" }}>Extra</Button>
                <Button onClick={drinkMenu} style = {{ height: "100%", width: "17.5%", backgroundColor: "blue", color: "white" }}>Drink</Button>
            </div>
            <div style = {{ height: "80%", marginTop: "2.5%", padding: "2.5%", backgroundColor: "lightgrey" }}>
                <BowlMenuGrid />
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ height: "100%" }}>
                    <Grid item xs = {3}>
                        <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
                    </Grid>
                    <Grid item xs = {3}>
                        <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
                    </Grid>
                    <Grid item xs = {3}>
                        <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
                    </Grid>
                    <Grid item xs = {3}>
                        <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
                    </Grid>
                    <Grid item xs = {3}>
                        <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
                    </Grid>
                    <Grid item xs = {3}>
                        <Button style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>xs = 4</Button>
                    </Grid>
                </Grid> */}
            </div>
            <div style = {{ display: "flex", height: "30%", marginTop: "2.5%", marginBottom: "10%", paddingTop: "2.5%", backgroundColor: "lightgrey" }}>
                <div style = {{ height: "90%", width: "60%", marginLeft: "2.5%", backgroundColor: "whitesmoke" }}>
                    Itemized Receipt
                </div>
                <div style = {{ display: "block", height: "90%", width: "30%", marginLeft: "5%" }}>
                    <div style = {{ height: "60%", width: "100%", paddingTop: "5%", backgroundColor: "whitesmoke" }}>
                        <div style = {{ height: "25%", width: "80%", marginLeft: "10%", backgroundColor: "lightgrey" }} >
                            Total: $X.XX
                        </div>

                        <Button style = {{ height: "25%", width: "80%", marginTop: "10%", marginLeft: "10%", backgroundColor: "blue", color: "white" }}>Checkout</Button>
                    </div>
                    <Button style = {{ height: "25%", width: "60%", marginTop: "2.5%", marginLeft: "20%", backgroundColor: "red", color: "white" }}>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default CustomerGUI;