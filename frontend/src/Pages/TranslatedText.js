import axios from 'axios'

import { useState, useEffect } from "react";

const TranslatedText=(props)=>{
    console.log("dwad")
    const [translation, setTranslation]=useState("")

    useEffect(()=>{
      const getTranslation= async ()=>{
         const result = await axios.post("http://localhost:5000/translateText", { text: props.text, lang:props.lang})
         
         setTranslation(result.data);
      }
      getTranslation()
    
    },[])
    
    return <>{translation}</>
    }

export default TranslatedText