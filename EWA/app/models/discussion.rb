class Discussion < ApplicationRecord
  belongs_to :code
  has_many :comments, dependent: :destroy
  has_rich_text :code
  has_rich_text :notes
end