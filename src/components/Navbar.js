
import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <i className="fab fa-optin-monster"></i>
        <h1>WebSitic</h1>
        <NavLink exact to='/' className='nav-link mouse-hover' activeClassName='nav-link-active'>Accueil</NavLink>
        <NavLink to='/about' className='nav-link mouse-hover' activeClassName='nav-link-active'>L'agence</NavLink>
        <NavLink to='/works' className='nav-link mouse-hover' activeClassName='nav-link-active'>Projets</NavLink>
      </div>
      <ThemeBtn/>
    </div>
  );
};

export default Navbar;