import React from "react"
import Navbar from "./Components/Navbar"
import Travel from "./Components/Travel"
import data from "./data"

 function CardElements(){ 
     return data.map(item => <Travel key={item.id} item={item} />)
 }

export default function App () {
   
    return (
        <div>
        <Navbar /> 
        <CardElements/>
        </div>
    )
}