class ChangeQuestionsAndCodes < ActiveRecord::Migration[6.0]
  def change
  	create_table :codes_questions, id: false do |t|
      t.belongs_to :code
      t.belongs_to :question
    end
  end
end
