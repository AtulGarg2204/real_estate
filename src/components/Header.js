import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">VENQ</Link>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <div className="navbar-dropdown">
          <Link to="/company">Company</Link>
          <div className="dropdown-menu">
            <Link to="/company/details">Details</Link>
            <Link to="/company/overview">Overview</Link>
          </div>
        </div>
        <Link to="/fractional-investing">Fractional Investing</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/rates">Rates</Link>
      </div>
    </nav>
  );
}

export default Header;
