class Code < ApplicationRecord
	has_many :correct_answers, dependent: :destroy
	has_many :student_answers, dependent: :destroy
	has_many :team_answers, dependent: :destroy
	has_many :discussions, dependent: :destroy
	validates :code, presence: true
	belongs_to :quiz

	has_rich_text :code
	has_rich_text :notes

	def correct_answer
		correct_answers.find_by(isCorrect: true)
	end

	def all_correct_answer
		correct_answers.where(isCorrect: true)
	end

end
