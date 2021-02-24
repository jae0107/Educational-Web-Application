class CommentsController < ApplicationController
	before_action :authenticate_user!

	def index
    	@comments = Comment.all
  	end

  	def show
  		if params[:take_quiz]
			@comment = Comment.find(params[:id])
		end
	end

  	def create
		@discussion = Discussion.find(params[:discussion_id])
		@comment = @discussion.comments.create(comment_params)
		# @comment = @discussion.comments.create(:body => "test", :discussion_id => "14", :team_id => "1", :uni_id => "1775723")

		redirect_to discussion_path(@discussion, :take_quiz => true, :code_id => @discussion.code_id)
	 end

	def destroy
		@discussion = Discussion.find(params[:discussion_id])
		@comment = @discussion.comments.find(params[:id])
		@comment.destroy

		redirect_to discussion_path(@discussion, :take_quiz => true, :code_id => @discussion.code_id)
	end

	def comment_params
     	params.require(:comment).permit(:body, :discussion_id, :team_id, :uni_id)
    end
end
