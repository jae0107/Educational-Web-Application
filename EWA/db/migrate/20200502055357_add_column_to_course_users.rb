class AddColumnToCourseUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :course_users, :academic_program, :string
  end
end
