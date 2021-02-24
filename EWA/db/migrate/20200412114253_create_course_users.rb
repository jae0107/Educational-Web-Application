class CreateCourseUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :course_users do |t|
      t.string :uni_ID

      t.timestamps
    end
  end
end
