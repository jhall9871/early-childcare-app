class Message < ApplicationRecord
  belongs_to :teacher
  belongs_to :caregiver
end
