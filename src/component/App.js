import React from "react"
// two dots to get into the parent folder for APP.CSS
import '../App.css' 
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App"> 
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
