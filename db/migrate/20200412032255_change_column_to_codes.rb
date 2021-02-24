class ChangeColumnToCodes < ActiveRecord::Migration[6.0]
  def change
  	remove_column :codes, :course, :string
  	add_column :codes, :course_code, :string
    add_column :codes, :course_name, :string
  end
end
