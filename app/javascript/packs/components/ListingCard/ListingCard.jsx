import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const starRating = data => {
  var stars = [];
  for (var i = 0; i < 5; i++) {
    stars.push(
      <svg
        viewBox="0 0 24 24"
        key={i}
        className={`h-4 w-4 fill-current ${
          i < data.rating ? "text-teal-500" : "text-gray-500"
        }`}
      >
        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
      </svg>
    );
  }
  return stars;
};

const ListingCard = ({ listing }) => {
  return (
    <div className="w-full px-4 py-4 sm:w-80 sm:flex-shrink-0">
      <div className="relative overflow-hidden rounded-lg pb-5/6">
        <img
          className="absolute object-cover w-full h-full shadow-md"
          src={listing.imageUrl}
        />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
            {listing.beds} beds &bull; {listing.baths} baths
          </div>
          <h4 className="text-lg font-semibold truncate">{listing.title}</h4>
          <div>
            {listing.formattedPrice}
            <span className="text-sm text-gray-600"> / week</span>
          </div>
          <div className="flex items-center mt-2">
            {starRating(listing)}
            <span className="ml-2 text-sm text-gray-600">
              {listing.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
