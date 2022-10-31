import { Button } from "@mui/material"


const Header = (props) => {
    return (
      <div style = {{ height: "10%",}}>
        <div style = {{  height:"85%",display:"grid", gridTemplateColumns:"1fr 8fr 1fr"}}>
          
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Button style ={{backgroundColor:"blue"}} variant = "contained" >Back</Button>
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
  