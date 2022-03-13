import React from "react";

import App from "./App.jsx"
import Login from "./pages/NewLogin/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function AppNew() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <App />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}
