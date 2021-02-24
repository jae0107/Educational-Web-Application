class RemoveDiscussionsComments < ActiveRecord::Migration[6.0]
  def change
  	drop_table :comments
  	drop_table :discussions
  end
end
