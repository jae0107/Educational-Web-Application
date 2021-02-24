class AddIsCorrectToCorrecAnswer < ActiveRecord::Migration[6.0]
  def change
    add_column :correct_answers, :isCorrect, :boolean
  end
end
