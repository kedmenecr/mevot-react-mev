import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Route from 'react-router-dom/Route';
import Sidebar from './Sidebar/Sidebar.js'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="row">
            <div className="col-lg-3 ">
            <Sidebar />
            </div>
            <div className="col-lg-9">

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
        </div>
        </div>
      
      </Router>
      
    );
  }
}

export default App;
