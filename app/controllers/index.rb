get '/' do
  if session[:username_1] || session[:username_2]
    redirect to '/play'
  end

  erb :index
end

post '/' do
  session[:username_1] = params[:username_1]
  session[:username_2] = params[:username_2]

  user1 = User.find_or_create_by(username: params[:username_1])
  user2 = User.find_or_create_by(username: params[:username_2])

  game = Game.create
  game.users << user1
  game.users << user2

  redirect to '/play'
end

get '/play' do
  if session[:username_1] && session[:username_2]
    erb :racer
  else
    redirect to '/'
  end
end

post '/game_over' do
  user = nil
  if params[:winner] == "#player1_won"
    user = User.where(username: session[:username_1]).first
  else
    user = User.where(username: session[:username_2]).first
  end

  game = Game.last
  game.winner = user.username
  game.save

  redirect to '/'
end
