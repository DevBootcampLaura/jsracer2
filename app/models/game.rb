class Game < ActiveRecord::Base
  has_many :player_games
  has_many :players, :through=>:player_games
  belongs_to :winner, class_name: "Player"
end
