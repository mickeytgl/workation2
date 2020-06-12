require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

import "./application.css";
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
import NewListing from "./components/NewListing/NewListing";
import Navbar from "./components/Navbar/Navbar";
import ListingCard from "./components/ListingCard/ListingCard";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Navbar />
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact={true} path="/listings" component={Listings} />
        <Route path="/listings/new" component={NewListing} />
      </Switch>
    </Router>
  </ApolloProvider>
);

document.addEventListener("turbolinks:load", function() {
  render(<App />, document.getElementById("root"));
});
