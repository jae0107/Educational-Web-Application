class VarRolesController < ApplicationController
	before_action :authenticate_user!
	# def index
	# 	@var_roles = VarRole.all
	# end

	def index
		if params[:teacher] && current_user.username == '1000000'
			@var_roles = VarRole.all
			render 'index'
		elsif params[:teacher] && current_user.username != '1000000'
			render 'index_student'
		end
		if params[:student]
			@var_roles = VarRole.all
			render 'index_student'
		end
	end
	
	# def show
	# 	@var_role = VarRole.find(params[:id])
	# end
	def show	
		if params[:teacher] && current_user.username == '1000000'
				@var_role = VarRole.find(params[:id])
				render 'show'
		elsif params[:teacher] && current_user.username != '1000000'
			render 'show_student'
		end
		if params[:student]
			@var_role = VarRole.find(params[:id])
			render 'show_student'
		end
	end

	def new
		@var_role = VarRole.new
	end

	def edit
		@var_role = VarRole.find(params[:id])
	end

	def create
		@var_role = VarRole.new(var_role_params)

		if @var_role.save
			redirect_to var_roles_path(:teacher => true)
		else
			render 'new'
		end
	end

	def update
		@var_role = VarRole.find(params[:id])

		if @var_role.update(var_role_params)
			redirect_to var_roles_path(:teacher => true)
		else
			render 'edit'
		end
	end

	def destroy
		@var_role = VarRole.find(params[:id])
  		@var_role.destroy
  		redirect_to var_roles_path(:teacher => true)
	end

	private
	def var_role_params
		params.require(:var_role).permit(:VarRole, :VarRoleDescription, :example)
	end
end
