class CreateSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.string :category
      t.string :abbreviation
      t.string :description

      t.timestamps
    end
  end
end
