class CreateStudentTeachers < ActiveRecord::Migration
  def change
    create_table :student_teachers do |t|
      t.belongs_to :student
      t.belongs_to :teacher
      t.text :notes

      t.timestamps
    end
  end
end
