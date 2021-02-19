import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import $ from "jquery";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Ads from "./components/Ads";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <div>
      
        <Navbar />
        <Banner />
        <Ads />
        <Switch>
          <Route exact path="/" component={Home} />          
          <Route exact path="/about" component={About} /> 
          <Redirect to="/" />         
        </Switch>
        <Footer />
     
    </div>
  );
}

export default App;
