import { Button } from "@mui/material"
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
      <div style = {{ height: "10%",}}>
        <div style = {{  height:"85%",display:"grid", gridTemplateColumns:"1fr 8fr 1fr"}}>
          
          
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Link to = {(props.path ?? '/')} style={{textDecoration:"none"}}>
              <Button style ={{backgroundColor:"blue"}} variant = "contained" >Back</Button>
            </Link>
          </div>

          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h1 style = {{textAlign: "center"}}>{props.title}</h1>
          </div>
          
          

            
        </div>

        <hr/>
      </div>
    );
  }
  
  export default Header;
  