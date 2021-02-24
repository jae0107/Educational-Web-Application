class RemoveUniIdFromCourses < ActiveRecord::Migration[6.0]
  def change
  	remove_column :courses, :uni_ID, :string
  end
end
