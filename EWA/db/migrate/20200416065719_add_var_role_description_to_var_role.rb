class AddVarRoleDescriptionToVarRole < ActiveRecord::Migration[6.0]
  def change
    add_column :var_roles, :VarRoleDescription, :text
  end
end
