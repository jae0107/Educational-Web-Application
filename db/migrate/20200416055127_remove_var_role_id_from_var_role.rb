class RemoveVarRoleIdFromVarRole < ActiveRecord::Migration[6.0]
  def change

    remove_column :var_roles, :VarRoleID, :integer
  end
end
