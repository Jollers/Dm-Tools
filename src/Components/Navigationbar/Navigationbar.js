import React from "react";
import './Navigationbar.css';
import {Link} from 'react-router-dom';

function Navigationbar() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav>
      <h3 className="text-left">Navigation</h3>
      <ul className="nav-Links">
        <Link style={navStyle} to="/">
        <li>Home</li>
        </Link>
        <Link style={navStyle} to="/characters">
        <li>Characters</li>
        </Link>
        <Link style={navStyle} to="/music">
        <li>Music</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navigationbar;