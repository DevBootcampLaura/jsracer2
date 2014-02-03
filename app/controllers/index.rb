get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do
  player1 = Player.find_or_create_by(name: params[:player1])
  player2 = Player.find_or_create_by(name: params[:player2])
  game = Game.create
  session[:game_id] = game.id
  session[:player1] = player1.id
  session[:player2] = player2.id
  player1.games << game
  player2.games << game
  redirect ('/game')
end
