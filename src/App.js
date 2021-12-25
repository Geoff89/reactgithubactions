import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
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
