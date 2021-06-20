import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import MainContent from "./components/maincontent";
function App() {
  return (
    <div className="App">

            <NavBar />
            <MainContent />

    </div>
  );
}

export default App;
