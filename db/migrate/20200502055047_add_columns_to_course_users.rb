class AddColumnsToCourseUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :course_users, :first_name, :string
    add_column :course_users, :last_name, :string
    add_column :course_users, :team_id, :integer
  end
end
