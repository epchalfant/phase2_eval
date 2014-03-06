class Teacher < ActiveRecord::Base
  has_many :student_teachers
  has_many :students, through: :student_teachers
  # Remember to create a migration!
end
