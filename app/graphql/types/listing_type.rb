module Types
  class ListingType < Types::BaseObject
    field :id, ID, null: false
    field :price, Integer, null: false
    field :formatted_price, String, null: false
    field :user, UserType, null: false
    field :title, String, null: false
    field :beds, Integer, null: false
    field :baths, Integer, null: false
    field :review_count, Integer, null: false
    field :rating, Integer, null: false
    field :image_url, String, null: false

    def formatted_price
      sprintf("$%0.02f", object.price)
    end
  end
end
