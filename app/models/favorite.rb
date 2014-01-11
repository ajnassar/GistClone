class Favorite < ActiveRecord::Base
  attr_accessible :user_id, :gist_id

  validates :user_id, :uniqueness => { :scope => :gist_id }
end
