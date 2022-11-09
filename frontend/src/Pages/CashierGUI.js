import { Button, TextField } from "@mui/material"
import { Grid } from '@mui/material';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

const managerButtonList = [
    {id: 1, buttonName: "Statistics", linkName: "/statistics"},
    {id: 2, buttonName: "Inventory", linkName: "/inventory"}
]

function extraMenu() {
    console.log("extra button clicked");
}

function drinkMenu() {
    console.log("drink button clicked");
}


const CashierGUI = () => {
    const location = useLocation()
    
    const [results, setResults] = useState([])
    const [receipt, setReceipt] = useState([])
    const [total, setTotal] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    // TODO: IMPLEMENT LOGIC FOR SERVER VS MANAGER
    const [managerButtons, setManagerButtons] = useState([...managerButtonList])

    function buttonMenu() {
        setManagerButtons([...managerButtonList]);
    }

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

    const handleClick = async (item) => {
        setReceipt([...receipt,item]);
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/addItem', {
                method: 'POST',
                body: JSON.stringify({ itemName: item }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
            console.log(result);
            setTotal(result.totalPrice);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCheckout = async (payment, employeeName) => {
        setIsLoading(true);
        emptyReceipt()
        try {
            const response = await fetch('http://localhost:5000/sendOrder', {
                method: 'POST',
                body: JSON.stringify({ paymentType : payment, empName: employeeName }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
            console.log(result);

        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const emptyReceipt = () => {
        setReceipt([]);
    };

    return (
        <div style = {{ width: "90%", height: "100%", marginLeft: "5%" }}>
            <div className="menuOptions" style={{ height: "7.5%", marginTop: "2.5%" }}>
                <Button onClick={bowlMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", marginLeft: "4.5%", backgroundColor: "blue", color: "white" }}>Bowl</Button>
                <Button onClick={gyroMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", backgroundColor: "blue", color: "white" }}>Gyro</Button>
                <Button onClick={extraMenu} style = {{ height: "100%", width: "17.5%", marginRight: "7%", backgroundColor: "blue", color: "white" }}>Extra</Button>
                <Button onClick={drinkMenu} style = {{ height: "100%", width: "17.5%", backgroundColor: "blue", color: "white" }}>Drink</Button>
            </div>
            <div style = {{ height: "80%", marginTop: "2.5%", padding: "2.5%", backgroundColor: "lightgrey" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ height: "100%" }}>
                {results.map( elem => {
                     return (
                            <Grid item xs = {3} style={{ height: "20vw" }}>
                                <Button onClick = {event => handleClick(elem.itemName)} style = {{ backgroundColor: "blue", color: "white", width: "100%", height: "100%" }}>{elem.itemName}</Button>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <div style = {{ display: "flex", minHeight: "30%", marginTop: "2.5%", marginBottom: "10%", paddingTop: "2.5%", paddingBottom: "2.5%", backgroundColor: "lightgrey" }}>
                <div style = {{ minHeight: "90%", width: "45%", marginLeft: "2.5%", backgroundColor: "whitesmoke" }}>
                    <p style = {{ fontWeight: "bold", marginBottom: "1%", marginLeft: "1%", marginTop: "1%" }}>
                        Itemized Receipt
                    </p>
                    {receipt.map( elem => {
                        return (
                            <p style = {{ marginLeft: "1%" }}>
                                {elem}
                            </p>
                        );
                    })}
                </div>
                <div style = {{ minHeight: "90%", width: "15%", marginLeft: "2.5%" }}>
                    <div style = {{ height: "20%", width: "100%", marginTop: "20%", backgroundColor: "whitesmoke" }} >
                        Total: $ { total }
                    </div>
                    <div style = {{ height: "20%", width: "100%", marginTop: "20%", backgroundColor: "whitesmoke" }} >
                        Employee ID: 12345
                    </div>
                </div>
                <div style = {{ minHeight: "90%", width: "30%", marginLeft: "2.5%" }}>
                    <div style = {{ minHeight: "60%", width: "100%", paddingTop: "2.5%", backgroundColor: "whitesmoke" }}>
                        <div className="checkoutButtons" style = {{ width:"80%", marginLeft: "10%" }}>
                            <Button onClick = {event => handleCheckout("Credit", "Sry")} style = {{ height: "47.5%", width: "47.5%", marginTop: "2.5%", marginLeft: "1.66%", backgroundColor: "blue", color: "white" }}>Credit</Button>
                            <Button onClick = {event => handleCheckout("Dining Dollars", "Sry")} style = {{ height: "47.5%", width: "47.5%", marginTop: "2.5%", marginLeft: "1.66%", backgroundColor: "blue", color: "white" }}>Dining Dollars</Button>
                            <Button onClick = {event => handleCheckout("Retail Swipes", "Sry")} style = {{ height: "47.5%", width: "47.5%", marginTop: "2.5%", marginLeft: "1.66%", backgroundColor: "blue", color: "white" }}>Retail Swipes</Button>
                            <Button onClick = {event => handleCheckout("Employee Swipes", "Sry")} style = {{ height: "47.5%", width: "47.5%", marginTop: "2.5%", marginLeft: "1.66%", backgroundColor: "blue", color: "white" }}>Employee Swipes</Button>
                            {managerButtons.map( elem => {
                                return (
                                        <Link to={elem.linkName} style={{ textDecoration:"none" }}>
                                            <Button style = {{ height: "47.5%", width: "47.5%", marginTop: "2.5%", marginLeft: "1.66%", backgroundColor: "blue", color: "white" }}>{elem.buttonName}</Button>
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                    <Link to="/pinpad" style={{textDecoration:"none"}} >
                        <Button onClick={buttonMenu} style = {{ maxHeight: "25%", width: "60%", marginTop: "5%", marginLeft: "20%", backgroundColor: "red", color: "white" }}>Sign Out</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CashierGUI;