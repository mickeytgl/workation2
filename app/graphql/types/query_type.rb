module Types
  class QueryType < Types::BaseObject
    field :listing, ListingType, null: true do
      description "Find a listing by ID"
      argument :id, ID, required: true
    end

    field :listings, [ListingType], null: true do
      description "Get all listings"
    end

    def listing(id:)
      Listing.find id
    end

    def listings
      Listing.all
    end
  end
end
