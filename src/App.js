import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            {" "}
            <Homepage />
          </Route>
          <Route path="/dashboard">
            {" "}
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
