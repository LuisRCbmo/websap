import React from 'react';
import Button from '../../atoms/Button/Button';
//import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-center">
          <span>WebSap</span>
        </div>
        <div className="navbar-right">
          <Button label='Logout'></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;