import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import theme from './theme'
import Header from './components/Header';
import Main from './components/Main'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
      </ThemeProvider>
    </Router>
  );
}

export default App;
