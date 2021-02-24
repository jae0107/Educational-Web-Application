class AddNotesToCorrectAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :correct_answers, :notes, :text
  end
end
