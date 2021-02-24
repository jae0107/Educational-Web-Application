class CreateCorrectAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :correct_answers do |t|
      t.string :variable
      t.string :role
      t.references :code, null: false, foreign_key: true

      t.timestamps
    end
  end
end
