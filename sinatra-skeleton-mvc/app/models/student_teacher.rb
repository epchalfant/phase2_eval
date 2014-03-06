class StudentTeacher < ActiveRecord::Base
  belongs_to :student
  belongs_to :teacher
  # Remember to create a migration!
end
