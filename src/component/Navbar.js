import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to="/all">Всі оголошення</NavLink>
      </div>
      <div className="item">
        <NavLink to="/add">Додати</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
