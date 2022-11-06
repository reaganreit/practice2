import { Button } from "@mui/material"

const CashierGUI = () => {
    return (
        <span style = {{display: "flex", height: "100%", width: "100%"}}>
            <div style ={{height: "100%", width: "20%", marginLeft: "2.5%", marginRight: "2.5%", backgroundColor: "red"}}>
                <div className="paymentOptions">
                    <Button style={{backgroundColor: "blue", width: "80%", marginLeft: "10%", marginTop: "5%"}}>Credit</Button>
                    <Button style={{backgroundColor: "blue", width: "80%", marginLeft: "10%", marginTop: "5%"}}>Dining Dollars</Button>
                    <Button style={{backgroundColor: "blue", width: "80%", marginLeft: "10%", marginTop: "5%"}}>Retail Swipes</Button>
                    <Button style={{backgroundColor: "blue", width: "80%", marginLeft: "10%", marginTop: "5%"}}>Employee Retail Swipes</Button>
                </div>
            </div>
            <div style ={{height: "100%", width: "50%", marginRight: "2.5%", backgroundColor: "green"}}>
                
            </div>
            <div style ={{height: "100%", width: "20%", backgroundColor: "blue"}}>
                
            </div>

        </span>
    )
}

export default CashierGUI;