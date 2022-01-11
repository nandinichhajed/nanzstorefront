import {Routes, Route} from "react-router-dom"
import Home from "./core/Home"
import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.css" 

const Nandini = () =>{
  return (
    // Fragment 
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default Nandini;