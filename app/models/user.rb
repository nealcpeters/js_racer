class User < ActiveRecord::Base
  has_and_belongs_to_many :games

  validates :username, uniqueness: true
end
