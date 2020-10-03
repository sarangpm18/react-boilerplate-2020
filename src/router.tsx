import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
