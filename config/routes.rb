Rails.application.routes.draw do
  get 'home/index'

  get '/blinked/:blink_text' => 'home#blinked'

end
