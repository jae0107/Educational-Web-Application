class AddAnswerShowtimeToQuizzes < ActiveRecord::Migration[6.0]
  def change
  	add_column :quizzes, :answer_showtime, :integer
  end
end
