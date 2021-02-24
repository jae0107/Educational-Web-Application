class ChangeColumnToStudentAnswers < ActiveRecord::Migration[6.0]
  def change
  	change_column :student_answers, :variable, :string
  	change_column :student_answers, :role, :string
  end
end
