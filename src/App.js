import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
          <li><a href="login">Login</a></li>
          <li><a href="register">Register</a></li>
          <li><a href="character">character</a></li>
          <li><a href="leaderboard">Login</a></li>
          <li><a href="battlehistory">battlehistory</a></li>
          <li><a href="battle">battle</a></li>
          </ul>
          <Route
            path="/" exact render={
              () => {
                return (
                  <h1>Welcome home</h1>
                );
              }
            }
          />
          <Route
            path="/login" render={
              () => {
                return (
                  <h1>Welcome about</h1>
                );
              }
            }
          />
          <Route
            path="/register" exact render={
              () => {
                return (
                  <h1>Welcome home</h1>
                );
              }
            }
          />
          <Route
            path="/character" render={
              () => {
                return (
                  <h1>Welcome about</h1>
                );
              }
            }
          />
          <Route
            path="/leaderboard" render={
              () => {
                return (
                  <h1>Welcome about</h1>
                );
              }
            }
          />
          <Route
            path="/battlehistory" render={
              () => {
                return (
                  <h1>Welcome about</h1>
                );
              }
            }
          />
          <Route
            path="/battle" render={
              () => {
                return (
                  <h1>Welcome about</h1>
                );
              }
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
