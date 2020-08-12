class Teacher < ApplicationRecord
    has_many :classrooms
    has_many :children, through: :classrooms
end
