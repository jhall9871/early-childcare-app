class CreateChildren < ActiveRecord::Migration[6.0]
  def change
    create_table :children do |t|
      t.string :first_name
      t.string :last_name
      t.string :pronouns
      t.date :birthday

      t.timestamps
    end
  end
end
