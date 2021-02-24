class AddTimeShowAnswerToQuizzes < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :time_show_answer, :datetime
  end
end
