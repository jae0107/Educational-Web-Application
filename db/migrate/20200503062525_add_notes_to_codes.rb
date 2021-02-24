class AddNotesToCodes < ActiveRecord::Migration[6.0]
  def change
    add_column :codes, :notes, :text
  end
end
