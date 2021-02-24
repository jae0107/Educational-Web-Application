class CorrectAnswer < ApplicationRecord
	belongs_to :code
	has_rich_text :notes
end
