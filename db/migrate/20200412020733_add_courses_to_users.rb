class AddCoursesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :course_code, :string
    add_column :users, :course_name, :string
  end
end
