class CodesController < ApplicationController
	before_action :authenticate_user!
	def index
		@codes = Code.all
	end	

	def show
		@code = Code.find(params[:id])
	end

	def create
		@quiz = Quiz.find(params[:quiz_id])
		@code = @quiz.codes.create(code_params)
		@discussion = @code.discussions.create(code_params)

		redirect_to quiz_path(@quiz)
	end

	def destroy
		@quiz = Quiz.find(params[:quiz_id])
		@code = @quiz.codes.find(params[:id])
		@code.destroy
		
		redirect_to quiz_path(@quiz)
	end

	def update
    	@quiz = Quiz.find(params[:quiz_id])
		@code = @quiz.codes.find(params[:id])
    	@quiz = @code.quiz
		@code.update_attributes(code_params)
		@discussion = @code.discussions.update(code_params)

        redirect_to quiz_path(@quiz)
	end

	private
		def code_params
			params.require(:code).permit(:code, :notes)
		end
end
