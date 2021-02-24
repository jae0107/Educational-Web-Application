class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :team_id
      t.integer :uni_id
      t.text :body
      t.references :discussion, null: false, foreign_key: true

      t.timestamps
    end
  end
end
