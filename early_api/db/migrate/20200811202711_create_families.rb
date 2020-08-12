class CreateFamilies < ActiveRecord::Migration[6.0]
  def change
    create_table :families do |t|
      t.references :caregiver, null: false, foreign_key: true
      t.references :child, null: false, foreign_key: true
      t.string :relationship

      t.timestamps
    end
  end
end
