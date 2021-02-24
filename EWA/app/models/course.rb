class Course < ApplicationRecord
	has_many :course_users, dependent: :destroy
	has_many :quizzes, dependent: :destroy
	has_many :codes, through: :quizzes
	validates :course_code, uniqueness: true, presence: true
	validates :course_name, uniqueness: true, presence: true
end
