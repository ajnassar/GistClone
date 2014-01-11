class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.integer :user_id, :null => false
      t.string :title, :null => false

      t.timestamps
    end
  end
end
