import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Menu() {
  return (
    <div id="menu">
      <Link to={"/"} >Główna</Link>
      <Link to={"/add"} >Dodaj</Link>
    </div>
  );
}

export default Menu;