class AddQuizIdToCodes < ActiveRecord::Migration[6.0]
  def change
    add_column :codes, :quiz_id, :integer
  end
end
