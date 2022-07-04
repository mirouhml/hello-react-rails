Rails.application.routes.draw do
  get 'greeting', to: 'api#random_greeting', as: :random_greeting

  root 'react#index'
end
