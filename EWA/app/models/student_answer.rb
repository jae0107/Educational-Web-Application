class StudentAnswer < ApplicationRecord
	belongs_to :code
	enum status: [:correct, :incorrect, :missing]
	# before_save :set_answer_status

	# private
	# def set_answer_status
	# 	if role.blank?||variable.blank?
	# 		self.status = missing
	# 	end
	# 	right_answer = code.correct_answer
	# 	if role == right_answer.role && variable == right_answer.variable
	# 		self.status = :correct
	# 	else
	# 		self.status = :incorrect
	# 	end
	# end
end


