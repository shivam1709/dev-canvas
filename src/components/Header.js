import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your external CSS file

function Header() {
  return (
    <div>
    <header className="header">
      <div className="nav">
        <div className="ul">
          <div className="logo">Devcanvas</div>
          <div className="search-bar">
          <input
              type="text"
              placeholder="Search..."
              className="input"
            />
          </div>
        </div>
      </div>
      <div className="nav">
        <ul className="ul">
        <li className="link">
            <Link to="/blog" className="link">Blog</Link>
          </li>
          <li className="link">
            <Link to="/portfolio" className="link">Portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="nav">
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </header>
    {/* Other components and content */}
  </div>
  );
}

export default Header;
