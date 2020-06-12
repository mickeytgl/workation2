import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const LISTINGS = gql`
  {
    listings {
      id
      formattedPrice
      imageUrl
      reviewCount
      beds
      baths
      rating
      title
    }
  }
`;

const Listings = () => {
  const { loading, error, data } = useQuery(LISTINGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( ${error.message}</p>;
  if (!data) return <p>NOT FOUND</p>;
  return (
    <div>
      {data.listings.map(listing => (
        <ListingCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
};

export default Listings;
