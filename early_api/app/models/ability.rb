class Ability < ApplicationRecord
  belongs_to :child
  belongs_to :skill
end
