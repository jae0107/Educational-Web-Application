class DiscussionsController < ApplicationController
	before_action :authenticate_user!
	def index
		@discussions = Discussion.all
	end

	def show
		if params[:take_quiz]
			@discussion = Discussion.find_by(code_id: params[:code_id])
		end
	end
end
