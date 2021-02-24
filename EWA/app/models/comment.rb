class Comment < ApplicationRecord
  belongs_to :discussion
  # belongs_to :course_user
  has_rich_text :body
end
