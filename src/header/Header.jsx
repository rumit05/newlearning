// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to import the CSS file

function Header() {
  return (
    <header className="site-header">
      <div className="logo">MySite</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
