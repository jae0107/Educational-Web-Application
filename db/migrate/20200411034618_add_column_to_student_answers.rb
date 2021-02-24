class AddColumnToStudentAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :student_answers, :uni_id, :string
  end
end
