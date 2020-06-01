module Types
  class ListingType < Types::BaseObject
    field :id, ID, null: false
    field :type, String, null: false
    field :price, Integer, null: false
    field :user, UserType, null: false
    field :title, String, null: false
  end
end
