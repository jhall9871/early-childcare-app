class Child < ApplicationRecord
    has_many :classrooms
    has_many :teachers, through: :classrooms
    has_many :families
    has_many :caregivers, through: :families
    has_many :abilities
    has_many :skills, through: :abilities
end
