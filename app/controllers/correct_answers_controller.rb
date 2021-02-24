class CorrectAnswersController < ApplicationController
	before_action :authenticate_user!
	def new
  		@correct_answer = Correct_answer.new
  	end

	def create
		@code = Code.find(params[:code_id])
		@correct_answer = @code.correct_answers.create(correct_answer_params)
		redirect_to code_path(@code)
	end

	def edit
		@correct_answer = Correct_answer.find(params[:id])
	end

	def update
    	@code = Code.find(params[:code_id])
		@correct_answer = @code.correct_answers.find(params[:id])
    	@code = @correct_answer.code
		@correct_answer.update_attributes(correct_answer_params)
        redirect_to code_path(@code)
	end

	def show
		@code = Code.find(params[:code_id])
		@correct_answer = @code.correct_answers.find(params[:id])
	end

	def destroy
		@code = Code.find(params[:code_id])
		@correct_answer = @code.correct_answers.find(params[:id])
		@correct_answer.destroy
		redirect_to code_path(@code)
	end

	private
		def correct_answer_params
			params.require(:correct_answer).permit(:variable, :role, :isCorrect, :notes)
		end
end
