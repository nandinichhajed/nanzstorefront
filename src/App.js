import {Routes, Route} from "react-router-dom"
import Home from "./core/Home"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css" 

const App = () =>{
  return (
    // Fragment 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


export default App;