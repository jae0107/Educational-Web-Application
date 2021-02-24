class ChangeToCourseUser < ActiveRecord::Migration[6.0]
  def change
  	remove_column :course_users, :course_code, :string
  	add_column :course_users, :course_id, :string
  end
end
