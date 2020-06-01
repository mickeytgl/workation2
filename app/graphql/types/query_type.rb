module Types
  class QueryType < Types::BaseObject
    field :listing, ListingType, null: true do
      description "Find a listing by ID"
      argument :id, ID, required: true
    end

    def listing(id:)
      Listing.find id
    end
  end
end
