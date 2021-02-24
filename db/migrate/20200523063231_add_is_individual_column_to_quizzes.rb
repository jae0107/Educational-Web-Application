class AddIsIndividualColumnToQuizzes < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :isIndividual, :boolean
  end
end
