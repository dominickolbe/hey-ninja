import React from "react";
import logo from "./logo.png";
import "./App.css";
import { EncodeURI } from "./components/encodeURI";

function App() {
  return (
    <div className="app">
      <EncodeURI/>
      <header className="app-header">
        <img
          src={logo}
          className="app-logo"
          alt="logo"
          data-testid="app-logo"
        />
      </header>
      
    </div>
  );
}

export default App;
