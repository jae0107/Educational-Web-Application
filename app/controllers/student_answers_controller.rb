class StudentAnswersController < ApplicationController
	before_action :authenticate_user!
	def create
		@code = Code.find(params[:code_id])
		@student_answer = @code.student_answers.create(student_answer_params)
		answer = @code.correct_answers.find_by(variable: params[:student_answer][:variable], role: params[:student_answer][:role])
		student_answer = StudentAnswer.find_by(uni_id: "#{current_user.username}", code_id: @code.id, variable: params[:student_answer][:variable], role: params[:student_answer][:role])
		if answer.present?
			if answer.isCorrect
				student_answer.update(score: 1)
			else
				student_answer.update(score: 0)
			end
		else
			student_answer.update(score: 0)
		end
	end

	def destroy
		@code = Code.find(params[:code_id])
		@student_answer = @code.student_answers.find(params[:id])
		@student_answer.destroy
		redirect_to code_path(@code)
	end

	def submit
		code_id = params[:code_id]
		code = Code.find(code_id)
		answer = code.correct_answers.find_by(variable: params[:variable], role: params[:role])
		if answer.present?
			if answer.isCorrect
				status = "correct"
			else
				status = "incorrect"
			end
		else
			status = "incorrect"
		end
		render json: { status: status }
	end

	def save_score
		if $current_course_id != 0
			quiz = Quiz.find(params[:quiz_id])
			score = params[:score]
			StudentQuiz.create(quiz_id: quiz.id, score: score, uni_id: current_user.username)
		end
	end

	private
		def student_answer_params
			params.require(:student_answer).permit( :variable, :role, :uni_id, :score, :status)
		end
end
