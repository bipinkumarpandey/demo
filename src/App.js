import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Ads />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
