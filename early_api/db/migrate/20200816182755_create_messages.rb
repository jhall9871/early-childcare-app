class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.references :teacher, null: false, foreign_key: true
      t.references :caregiver, null: false, foreign_key: true
      t.string :content
      t.string :author

      t.timestamps
    end
  end
end
