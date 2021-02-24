class QuizzesController < ApplicationController
	before_action :authenticate_user!
	def index
		@quizzes = Quiz.all
	end

	def show
		if params[:take_quiz]			
			@quiz = Quiz.find(params[:id])
			render 'take_quiz'
		else
			@quiz = Quiz.find(params[:id])
			render 'show'
		end
	end

	def create
		@course = Course.find(params[:course_id])
		@quiz = @course.quizzes.create(quiz_params)
		redirect_to course_path(@course)
	end

	def destroy
		@course = Course.find(params[:course_id])
		@quiz = @course.quizzes.find(params[:id])
		@quiz.destroy
		redirect_to course_path(@course)
	end

	def judge_deadline
		@quiz = Quiz.find_by(id: params[:id])
		status = @quiz.judge_show
		render json: { status: status }
	end

	private
		def quiz_params
			params.require(:quiz).permit(:answer_showtime, :quiz_name, :deadline, :time_show_answer, :isIndividual)
		end
end