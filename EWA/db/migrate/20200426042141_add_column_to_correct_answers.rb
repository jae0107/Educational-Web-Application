class AddColumnToCorrectAnswers < ActiveRecord::Migration[6.0]
  def change
  	add_column :correct_answers, :combination, :string
  end
end
