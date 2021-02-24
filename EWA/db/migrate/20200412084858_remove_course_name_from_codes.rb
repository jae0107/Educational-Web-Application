class RemoveCourseNameFromCodes < ActiveRecord::Migration[6.0]
  def change

    remove_column :codes, :course_name, :string
  end
end
