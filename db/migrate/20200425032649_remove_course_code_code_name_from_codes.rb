class RemoveCourseCodeCodeNameFromCodes < ActiveRecord::Migration[6.0]
  def change
  	remove_column :codes, :course_code, :integer
  	remove_column :codes, :code_name, :string
  end
end
