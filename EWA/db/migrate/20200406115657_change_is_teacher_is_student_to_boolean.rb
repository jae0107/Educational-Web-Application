class ChangeIsTeacherIsStudentToBoolean < ActiveRecord::Migration[6.0]
  def change
  		change_column :users, :is_teacher, :boolean
  		change_column :users, :is_student, :boolean
  end
end
