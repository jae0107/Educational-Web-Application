class Quiz < ApplicationRecord
	belongs_to :course
	has_many :codes, dependent: :destroy
	has_many :student_quizzes
	enum answer_showtime: {"Immediately After Submission": 1, "After Deadline": 2, "4 Days After Deadline": 3 }

	def total_scale
		code_ids = self.codes.ids
		CorrectAnswer.where(code_id: code_ids).where(isCorrect: true).count
	end
	def judge_show
		status = "no"

		if self.answer_showtime == "Immediately After Submission"
			status = "ok"
		elsif self.answer_showtime == "After Deadline"
			status = "ok" if Time.now >= self.deadline
		elsif self.answer_showtime == "4 Days After Deadline"
			status = "ok" if Time.now >= self.deadline+4.days
		end
		status
	end
end
