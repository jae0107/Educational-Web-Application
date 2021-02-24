class RemoveColumnFromUsers < ActiveRecord::Migration[6.0]
  def change
  	remove_column :users, :isTeacher, :boolean
  	remove_column :users, :isStudent, :boolean
  end
end
