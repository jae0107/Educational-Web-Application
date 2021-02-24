class AddCourseIdToCourseUser < ActiveRecord::Migration[6.0]
  def change
    add_column :course_users, :course_code, :string
  end
end
