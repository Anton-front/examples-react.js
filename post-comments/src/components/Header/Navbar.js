import React from 'react';
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

export default function Navbar() {
  return (
  	<nav className="navbar">
      <MenuList className="main-nav">
        <MenuItem>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/posts">Posts</NavLink>
        </MenuItem>
      </MenuList>
    </nav>
  );
}
