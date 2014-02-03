get '/game' do
  player1 = Player.find(session[:player1])
  player2 = Player.find(session[:player2])
  game = Game.create
  session[:game_id] = game.id
  player1.games << game
  player2.games << game
  erb :game
end

post '/game' do
  hash = params
  game = Game.find(session[:game_id])

  if hash["win"] == "Player 1"
    game.update(winner_id: session[:player1], winner_time: params["time"])
  elsif hash["win"] == "Player 2"
    game.update(winner_id: session[:player2], winner_time: params["time"])
  end

  game.id.to_s
end

get '/results/:game_id' do
  @game = Game.find(params[:game_id])
  @players = @game.players
  @winner = @game.winner
  @time = @game.winner_time.to_f / 1000

  erb :results
end
