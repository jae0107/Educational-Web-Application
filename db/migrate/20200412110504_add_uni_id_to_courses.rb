class AddUniIdToCourses < ActiveRecord::Migration[6.0]
  def change
    add_column :courses, :uni_ID, :string
  end
end
