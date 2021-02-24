class WelcomeController < ApplicationController
	def index
	end

	def show
		if params[:teacher] && current_user.username == '1000000'
			render 'teacher'
		elsif params[:teacher] && current_user.username != '1000000'
			render 'student'
		end
		if params[:student]
			render 'student'
		end
	end
end
