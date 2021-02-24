require 'csv'

class CourseUser < ApplicationRecord
	belongs_to :course
	# validates :uni_ID, uniqueness: true,  presence: true
	# validates :first_name, presence: true

	def self.import(file)
		CSV.foreach(file.path, headers: ['uni_ID', 'last_name', 'first_name', 'academic_program', 'team_id']).drop(1).each do |row|
	      	CourseUser.create! row.to_hash
	    end
	end
end

# CSV.foreach(file.path, headers: true) do |row|