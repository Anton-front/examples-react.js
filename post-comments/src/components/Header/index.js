import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from './Navbar'

export default function Header() {
	return (
    <AppBar position="static">
      <Toolbar>
				<Navbar />
      </Toolbar>
    </AppBar>
	);
}
