import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";

const Navbar = () => {
  return (
    <div>
      <Link to= "/">
      <header className="navbar">
        
          <img src={logo} alt="logo" />
        
      </header>
      </Link>
    </div>
  );
};

export default Navbar;
