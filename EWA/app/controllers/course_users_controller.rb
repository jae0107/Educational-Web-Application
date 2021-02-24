class CourseUsersController < ApplicationController
  before_action :authenticate_user!
  def new
  	@course_user = Course_user.new
  end

  def create
    @course = Course.find(params[:course_id])
    @course_user = @course.course_users.build(course_user_params)
    @course_user.save
    redirect_to course_path(@course)
  end

  def edit
    @course_user = Course_user.find(params[:id])
  end

	def update
    	@course = Course.find(params[:course_id])
		@course_user = @course.course_users.find(params[:id])
    	@course = @course_user.course
		@course_user.update_attributes(course_user_params)
        redirect_to course_path(@course)
	end

	def show
		@course = Course.find(params[:course_id])
		@course_user = @course.course_users.find(params[:id])
	end

  def destroy
    @course = Course.find(params[:course_id])
    @course_user = @course.course_users.find(params[:id])
    @course_user.destroy
    redirect_to course_path(@course)
  end

	def import
    @course = Course.find(params[:course_id])

    if !params[:file].blank?
      @course_user = @course.course_users.import(params[:file])
      redirect_to course_path(@course), notice: "Users Added Successfully"
    else
      redirect_to course_path(@course), alert: "No file"
    end
  end

	private
		def course_user_params
			params.require(:course_user).permit(:uni_ID, :first_name, :last_name, :team_id, :academic_program)
		end
end
