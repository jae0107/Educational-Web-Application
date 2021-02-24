class CreateStudentQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :student_quizzes do |t|
      t.integer :quiz_id
      t.integer :score
      t.string :uni_id
      t.index :quiz_id

      t.timestamps
    end
  end
end
