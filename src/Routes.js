import {Routes, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from "./user/Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import UserDashboard from "./user/UserDashboard"
import PrivateRoutes from "./auth/helper/PrivateRoutes"
import Signin from "./user/Signin"
import { isAuthenticated } from "./auth/helper"

// import "./App.css" 

const Nandini = () =>{
  return (
    // Fragment 
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/user/dashboard" element={isAuthenticated ? <UserDashboard /> : <Signin />} />
      </Routes>
    </>
  );
}

export default Nandini;