class CoursesController < ApplicationController
	before_action :authenticate_user!
	# def index
	# 	@courses = Course.all
	# end	

	def index
		if params[:take_quiz] && current_user.username != '1000000'
			# @courses = Course.all
			@courses = Course.joins(:course_users).where(course_users: {uni_id: current_user.username}).order("course_code ASC")
			render 'take_quiz'
		elsif params[:take_quiz] && current_user.username == '1000000'
			@courses = Course.all.order("course_code ASC")
			render 'take_quiz'
		else
			@courses = Course.all.order("course_code ASC")
			render 'index'
		end
	end

	# def show
	# 	@course  = Course.find(params[:id])
	# end

	def show
		if params[:course_quiz] && current_user.username != '1000000'
			@course  = Course.joins(:course_users).where(course_users: {uni_id: current_user.username}).order("course_code ASC").find(params[:id])
			render 'course_quiz'
		elsif params[:course_quiz] && current_user.username == '1000000'
			@course  = Course.find(params[:id])
			render 'course_quiz'
		else
			@course  = Course.find(params[:id])
			render 'show'
		end
	end

	def new
		@course = Course.new
	end

	def edit
		@course = Course.find(params[:id])
	end

	def create
		@course = Course.new(course_params)

		if @course.save
			redirect_to @course
		else
			render 'new'
		end
	end

	def update
		@course = Course.find(params[:id])

		if @course.update(course_params)
			redirect_to @course
		else
			render 'edit'
		end
	end

	def destroy
		@course = Course.find(params[:id])
		@course.destroy
		redirect_to courses_path
	end

	private
		def course_params
			params.require(:course).permit(:course_code, :course_name)
		end
end
