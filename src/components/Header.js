import React from 'react';
import { Link } from 'react-router-dom';
import rick from '../assets/svg/rick.svg';
import morty from '../assets/svg/morty.svg';
function Header() {
  return (
    <header className="site-header">
      <img width="80px" height="80px" src={rick} />
      <Link to="/">Home</Link>
      <img width="80px" height="80px" src={morty} />
    </header>
  );
}

export default Header;
