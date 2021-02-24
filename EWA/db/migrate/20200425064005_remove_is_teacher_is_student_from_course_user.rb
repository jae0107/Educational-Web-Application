class RemoveIsTeacherIsStudentFromCourseUser < ActiveRecord::Migration[6.0]
  def change
  	remove_column :course_users, :isTeacher, :boolean
  	remove_column :course_users, :isStudent, :boolean
  end
end
