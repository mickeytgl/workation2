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
    <div className="py-6 sm:flex xl:flex-1 xl:overflow-x-hidden">
      <div className="mt-6 sm:flex sm:overflow-x-auto sm:overflow-y-hidden">
        {data.listings.map(listing => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
