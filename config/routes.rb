Rails.application.routes.draw do
  root 'pages#home'

  resources :models, only: [:index]
end
