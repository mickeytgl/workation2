require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Listings from "./components/Listings/Listings";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/listings" component={Listings} />
      </Switch>
    </Router>
  </ApolloProvider>
);

document.addEventListener("turbolinks:load", function() {
  render(<App />, document.getElementById("root"));
});
