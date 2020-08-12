class CreateAbilities < ActiveRecord::Migration[6.0]
  def change
    create_table :abilities do |t|
      t.references :child, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true
      t.boolean :status

      t.timestamps
    end
  end
end
