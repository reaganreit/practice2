
import Header from "../Components/Header"
import axios from 'axios'

import { useState, useEffect } from "react";
import translate, { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
// const translate = setCORS("http://cors-anywhere.herokuapp.com/");
// setCORS("http://cors-anywhere.herokuapp.com/");

// translate("Je ne mangé pas six jours", { to: "en" })
//   .then(res => {
//     // I do not eat six days
//     console.log(res.text)
//   })
//   .catch(err => {
//     console.error(err);
//   });


const Map = ()=> {

  return (
    <div style={{ height: "100%"}}>
      <Header title = "Map" path = "/map"/>
      
        {/* <GoogleMap zoom = {10} center ={{lat: 30.613048885620053, lng: -96.34111433863698}} mapContainerStyle={{minWidth:"70%", minHeight:"70%"}}>
            <Marker position = {{lat: 30.613048885620053, lng: -96.34111433863698}} />
        </GoogleMap> */}
        <br/>
        <h2 style={{textAlign:"center"}}> Find us on the first floor of the MSC!</h2>
        <br/>
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13735.079319450622!2d-96.341286!3d30.6122548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7a405b853c13270!2sPom%20%26%20Honey%20-%20MSC!5e0!3m2!1sen!2sus!4v1668908460274!5m2!1sen!2sus" frameBorder="0" style={{border:0, minHeight:"70vh", width:"80%", minWidth:"350px"}} allowFullScreen="" loading="lazy" aria-hidden="false" tabIndex="0"></iframe>
        </div>

      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
  );
}

export default Map;




