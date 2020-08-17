class Caregiver < ApplicationRecord
    has_many :families
    has_many :children, through: :families
    has_many :messages
    has_many :teachers, through: :messages
end
