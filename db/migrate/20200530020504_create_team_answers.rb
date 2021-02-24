class CreateTeamAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :team_answers do |t|
      t.integer :team_id
      t.integer :code_id
      t.string :variable
      t.string :role
      t.integer :score
      t.integer :status

      t.timestamps
    end
  end
end
