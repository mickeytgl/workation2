class ChangeAttributesInListings < ActiveRecord::Migration[6.0]
  def change
    change_table :listings do |t|
      t.remove :category
      t.integer :beds
      t.integer :baths
      t.integer :review_count
      t.integer :rating
      t.string :image_url
    end
  end
end
