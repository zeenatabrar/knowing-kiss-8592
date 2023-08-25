import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"





function AllRoutes(){
    return (
    
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
   </Routes> 
    
    )
}
export default AllRoutes