import { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header"

import { createTheme, ThemeProvider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user";

const numbers = [ 0,
            1, 2, 3,
            4, 5, 6, 
            7, 8, 9 ]


const Pinpad = ()=> {
  const navigate = useNavigate()
  const {user,setUser } = useContext(UserContext)
  const [ passcode, setPasscode ] = useState("Enter Passcode")

  async function logIn(code){
    let role = "yoink"
    await axios.post('http://localhost:5000/employeeType',{
      pin: code
    })
        
      .then(res => {
        setUser({name: res.data.name, id: res.data.id, role: res.data.role})
        if (res.data.name !== undefined){
          navigate('/cashiergui')
        }
        else {
          navigate('/customergui')
        }
        
      })
  }

  function addToCode(digit){
    if (passcode === "Enter Passcode"){
      setPasscode( String(digit) )
    }
    else {
      setPasscode(passcode + digit)
    }
  }

  function removeDigit(){
    if (passcode.length === 1){
      setPasscode("Enter Passcode")
    }
    else {
      if (passcode !== "Enter Passcode"){
        setPasscode(passcode.slice(0, passcode.length - 1))
      }
    }
  }

  return (
    <div style={{ height: "100%"}}>
      <Header title = "Log in"/>


      {/* Start pinpad here */}
      <div style = {{width:"100%", display:"flex", justifyContent:"center", marginTop:"15vh"}}>

        <div style={{border:"solid", paddingTop:"4px"}}>
          
          <h1 style={{textAlign:"center"}}> {passcode} </h1>

          <div style = {{height:"370px", width:"370px", backgroundColor:"blue",color:"white", marginTop:"2vh"}}>

            {/* start rows here */}

            <div style = {{height:"25%", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>

              {numbers.slice(1,4).map( elem => {
                return (
                  <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>

                    <Button 
                      variant = "contained" 
                      onClick = {() => addToCode(elem)}
                      className = "hoverOpacity"
                      style = {{justifyContent:"center", border:"solid", width:"50%", height:"50%", display:"flex", alignItems:"center"}}>
                        {elem}
                    </Button>

                  </div>
                );
              })}

            </div>

            <div style = {{height:"25%", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>

            {numbers.slice(4,7).map( elem => {
                return (
                  <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>

                    <Button 
                      variant = "contained" 
                      onClick = {() => addToCode(elem)}
                      className = "hoverOpacity"
                      style = {{justifyContent:"center", border:"solid", width:"50%", height:"50%", display:"flex", alignItems:"center"}}>
                        {elem}
                    </Button>

                  </div>
                );
              })}

            </div>

            <div style = {{height:"25%", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>

            
            {numbers.slice(7,10).map( elem => {
                return (
                  <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>

                    <Button 
                      variant = "contained" 
                      onClick = {() => addToCode(elem)}
                      className = "hoverOpacity"
                      style = {{justifyContent:"center", border:"solid", width:"50%", height:"50%", display:"flex", alignItems:"center"}}>
                        {elem}
                    </Button>

                  </div>
                );
              })}

            </div>

            <div style = {{height:"25%", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>

              <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>
                <Button 
                  variant = "contained"
                  onClick = {() => removeDigit()}
                  className = "hoverOpacity"
                  style = {{justifyContent:"center", border:"solid", width:"50%", height:"50%", display:"flex", alignItems:"center"}}>
                    Delete
                </Button>
              </div>

              {numbers.slice(0,1).map( elem => {
                return (
                  
                  <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>

                    <Button
                      variant = "contained" 
                      onClick = {() => addToCode(elem)}
                      className = "hoverOpacity"
                      style = {{justifyContent:"center", border:"solid", width:"50%", height:"50%", display:"flex", alignItems:"center"}}>
                        {elem}
                    </Button>
                    
                  </div>
                );
              })}
              
              <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>
                {/* <Link to="/cashiergui" style={{ textDecoration:"none" }}> */}
                  <Button 
                    variant = "contained"
                    className = "hoverOpacity"
                    onClick = {() => console.log(logIn(passcode))}
                    style = {{justifyContent:"center", border:"solid", width:"60%", height:"60%", display:"flex", alignItems:"center"}}>
                      LOG IN
                  </Button>
                {/* </Link> */}
                
              </div>

            </div>



          </div>

        </div>
      </div>

      


      <br/>
      <br/>
      <br/>
      <br/>


      
      
    </div>
  );
}

export default Pinpad;




