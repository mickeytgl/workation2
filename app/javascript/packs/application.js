// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { render } from "react-dom";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

client
  .mutate({
    mutation: gql`
      mutation SignIn {
        signInUser(
          input: {
            credentials: { email: "mickey@mouse.com", password: "password" }
          }
        ) {
          token
          user {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2> Hello mai frends</h2>
    </div>
  </ApolloProvider>
);

document.addEventListener("turbolinks:load", function() {
  render(<App />, document.getElementById("root"));
});
