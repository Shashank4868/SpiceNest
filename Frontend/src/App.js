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
import SignupForm from "./Restaurant/components/signup/SignupForm";
import { useAuth } from "./Shared/hooks/auth-hook";
import { AuthContext } from "./Shared/context/auth-context";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import Order from "./User/pages/Order";
import Checkout from "./Restaurant/Pages/Checkout";

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
        <Route path="/orders/:uid" exact>
          <Order />
        </Route>
        <Route path="/checkout/:uid" exact>
          <Checkout />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
        <Route path="/signup" exact>
          <SignupForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <CartProvider>
        <Router>
          <MainNavigation />
          {routes}
        </Router>
      </CartProvider>
    </AuthContext.Provider>
  );
}

export default App;
