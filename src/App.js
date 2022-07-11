import React from "react";
import Weather from "./Weather";
import Appl from "./Appl";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Appl />
      </header>
    </div>
  );
}

export default App;
