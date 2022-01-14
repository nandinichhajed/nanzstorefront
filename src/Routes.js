import {Routes, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from "./user/Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import UserDashboard from "./user/UserDashboard"
import PrivateRoutes from "./auth/helper/PrivateRoutes"
// import "./App.css" 

const Nandini = () =>{
  return (
    // Fragment 
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <PrivateRoutes path="/user/dashboard" exact element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default Nandini;