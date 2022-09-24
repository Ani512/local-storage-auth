import React from "react";
import logo from './logo.svg';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { setAuth } from "local-storage-auth";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box sx={{ direction: "flex" }}>
          <Button sx={{ padding: 3, border: "3px solid green", marginRight: 2, color: 'green' }} onClick={() => setAuth(true)}>LOGIN TRUE</Button>
          <Button sx={{ padding: 3, border: "3px solid red", marginLeft: 2, color: 'red' }} onClick={() => setAuth(false)}>LOGIN FALSE</Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
