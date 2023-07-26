import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import HomePage from "./Restaurant/Pages/Home";
import MenuPage from "./Restaurant/Pages/Menu";
import CartProvider from "./Shared/context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route to="/menu">
            <MenuPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
