class AddDiscussionIdToCodes < ActiveRecord::Migration[6.0]
  def change
    add_column :codes, :discussion_id, :integer
  end
end
