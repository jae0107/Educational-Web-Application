class VarRole < ApplicationRecord
	validates :VarRole, uniqueness: true, presence: true
	has_rich_text :example
	has_rich_text :VarRoleDescription
end
