class AddPhotoToChildren < ActiveRecord::Migration[6.0]
  def change
    add_column :children, :photo, :string
  end
end
