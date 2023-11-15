import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="menu">
      <Link to={'/'}>Główna</Link>
      <Link to={'/add'}>Dodaj</Link>
    </div>
  );
}

export default Menu;