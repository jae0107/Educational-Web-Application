class AddQuizNameToQuiz < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :quiz_name, :string
  end
end
