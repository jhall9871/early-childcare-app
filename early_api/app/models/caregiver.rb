class Caregiver < ApplicationRecord
    has_many :families
    has_many :children, through: :families
end
