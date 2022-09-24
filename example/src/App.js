import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import logo from './logo.svg';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { setAuth, checkAuth } from "local-storage-auth";
import './App.css';
import { Typography } from "@mui/material";

function Login() {
  return (
    <Box sx={{ direction: "flex" }}>
      <Button sx={{ padding: 3, border: "3px solid green", marginRight: 2, color: 'green' }} onClick={() => setAuth(true)}>LOGIN TRUE</Button>
      <Button sx={{ padding: 3, border: "3px solid red", marginLeft: 2, color: 'red' }} onClick={() => setAuth(false)}>LOGIN FALSE</Button>
    </Box>
  )
}

function TestPage() {
  checkAuth();
  return (
    <Typography variant="h2">Test Page</Typography>
  )
}

function Error() {
  checkAuth("test");
  return (
    <Typography variant="h2">404 Error</Typography>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" element={<Login />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="*" element={<Error />} />
          </Switch>
          </Fragment>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
