get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/teachers/new' do
  erb :new_teacher
end

get '/teachers/:id' do
  Teacher.find(params[:id]).to_json
end


post '/teachers' do
  puts params
  teacher = Teacher.create(params)

  redirect "/teachers/#{teacher.id}"
end