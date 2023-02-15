import React from "react";
import './App.css';
import Login from '../login/Login';
import Register from './Register';

function App() {
  return (
    <React.Fragment>
      <p> App component! </p>
      <p>Para One</p>
      <p>Para two</p>
      <Login />
      < Register />
    </React.Fragment>
  );
}

export default App;
