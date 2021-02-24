class CreateCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :codes do |t|
      t.string :course
      t.string :code_name
      t.text :code

      t.timestamps
    end
  end
end
