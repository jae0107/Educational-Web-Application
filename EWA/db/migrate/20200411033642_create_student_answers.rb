class CreateStudentAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :student_answers do |t|
      t.text :variable
      t.text :role
      t.integer :code_id

      t.timestamps
    end
  end
end
