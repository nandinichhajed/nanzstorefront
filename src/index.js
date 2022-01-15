import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Nandini from "./Routes"
import {BrowserRouter} from "react-router-dom"
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nandini />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);