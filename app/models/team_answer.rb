class TeamAnswer < ApplicationRecord
	belongs_to :code
	enum status: [:correct, :incorrect, :missing]
end
