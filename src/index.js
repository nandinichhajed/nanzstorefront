import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
// import App from './App';
import Nandini from "./Routes"
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nandini />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);