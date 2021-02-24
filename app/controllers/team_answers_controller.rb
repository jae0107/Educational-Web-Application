class TeamAnswersController < ApplicationController
	before_action :authenticate_user!
	def create
		@code = Code.find(params[:code_id])
		@team_answer = @code.team_answers.create(team_answer_params)
		answer = @code.correct_answers.find_by(variable: params[:team_answer][:variable], role: params[:team_answer][:role])
		@team_answer = TeamAnswer.find_by(team_id: params[:team_answer][:team_id], code_id: @code.id, variable: params[:team_answer][:variable], role: params[:team_answer][:role])
		if answer.present?
			if answer.isCorrect
				team_answer.update(score: 1)
			else
				team_answer.update(score: 0)
			end
		else
			team_answer.update(score: 0)
		end
	end

	def destroy
		@code = Code.find(params[:code_id])
		@team_answer = @code.team_answers.find(params[:id])
		@team_answer.destroy
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

	# maggie please revise this part to fit the team_answer model, like what you did to student_answer
	def save_score
		quiz = Quiz.find(params[:quiz_id])
		score = params[:score]
		StudentQuiz.create(quiz_id: quiz.id, score: score, uni_id: current_user.username)
	end

	private
		def team_answer_params
			params.require(:team_answer).permit( :variable, :role, :team_id, :code_id, :score, :stauts)
		end
end
