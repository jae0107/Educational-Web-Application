class RemoveCourseFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :course_code, :string
    remove_column :users, :course_name, :string
  end
end
