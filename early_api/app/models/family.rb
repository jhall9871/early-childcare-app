class Family < ApplicationRecord
  belongs_to :caregiver
  belongs_to :child
end
