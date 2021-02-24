class CreateDiscussions < ActiveRecord::Migration[6.0]
  def change
    create_table :discussions do |t|
      t.text :code
      t.text :notes
      t.references :code, null: false, foreign_key: true

      t.timestamps
    end
  end
end
