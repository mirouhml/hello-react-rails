Rails.application.routes.draw do
  get 'greeting', to: 'api#random_greeting', as: :random_greeting

  get '*path', to: 'react#index'
  root 'react#index'
end
