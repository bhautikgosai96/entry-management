import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Guest from "./components/guest";
//import Host from "./components/host";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar></Navbar>
      <br/>
      <Route path="/" exact component={Guest}/>
      {/* <Route path="/host" component={Host}/> */}
      </div>
    </Router>
    
  );
}

export default App;
