class Skill < ApplicationRecord
    has_many :abilities
    has_many :children, through: :abilities
end
