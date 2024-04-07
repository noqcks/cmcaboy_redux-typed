import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";

export const history = createHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
