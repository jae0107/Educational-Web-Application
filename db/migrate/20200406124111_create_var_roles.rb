class CreateVarRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :var_roles do |t|
      t.integer :VarRoleID
      t.string :VarRole

      t.timestamps
    end
  end
end
