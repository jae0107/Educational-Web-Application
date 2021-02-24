class AddScoreToStudentAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :student_answers, :score, :integer
  end
end
