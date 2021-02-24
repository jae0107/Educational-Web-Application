class AddStatusToStudentAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :student_answers, :status, :integer
  end
end
