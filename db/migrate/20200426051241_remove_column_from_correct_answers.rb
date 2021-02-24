class RemoveColumnFromCorrectAnswers < ActiveRecord::Migration[6.0]
  def change
  	remove_column :correct_answers, :combination, :string
  end
end
