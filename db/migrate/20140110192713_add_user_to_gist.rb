class AddUserToGist < ActiveRecord::Migration
  def change
    add_column :gists, :user_id, :integer, {:null => false}
  end
end
