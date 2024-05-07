import React from "react"; 
import SneakerPage from "./SneakerPage";

function Header() {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
        👟
        </span>
        Sneaker Kings👑
      </h1>
         <SneakerPage />

    </header>
  );
}

export default Header;
