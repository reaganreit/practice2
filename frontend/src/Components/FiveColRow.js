import { Button } from "@mui/material"


const FiveColRow = (props) => {
    return (
        <div>

            <div style = {{ width:"100%",height:"50px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", borderBottom:"solid", borderWidth:0.5, backgroundColor:"blue", color:"white" }}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <h5 style = {{borderRight:"solid 0.5px", textAlign:"center", width:"100%"}}> {props.item} </h5>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    <h5 style = {{borderRight:"solid 0.5px", textAlign:"center", width:"100%"}}> {props.quantity}  </h5>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    <h5 style = {{borderRight:"solid 0.5px", textAlign:"center", width:"100%"}}> {props.prevQuantity}  </h5>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    <h5 style = {{borderRight:"solid 0.5px", textAlign:"center", width:"100%"}}> {props.lastShipment}  </h5>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    <h5 style = {{textAlign:"center", width:"100%"}}> {props.nextShipment}  </h5>
                </div>

            </div>
            
        </div>
    );
  }
  
  export default FiveColRow;
  