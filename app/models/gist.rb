class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to(
    :gist,
    :primary_key => :id,
    :foreign_key => :user_id,
    :class_name => "User",
  )
end
