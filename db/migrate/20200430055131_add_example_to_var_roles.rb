class AddExampleToVarRoles < ActiveRecord::Migration[6.0]
  def change
    add_column :var_roles, :example, :text
  end
end
