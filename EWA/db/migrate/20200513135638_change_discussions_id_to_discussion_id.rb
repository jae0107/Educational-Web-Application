class ChangeDiscussionsIdToDiscussionId < ActiveRecord::Migration[6.0]
  def change
  	remove_column :comments, :discussions_id, :integer
  	add_column :comments, :discussion_id, :integer
  end
end
