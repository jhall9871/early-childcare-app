class Teacher < ApplicationRecord
    has_many :classrooms
    has_many :children, through: :classrooms
    has_many :messages
    has_many :caregivers, through: :messages
end
