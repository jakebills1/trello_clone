Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :boards do 
      resources :lists
    end
    resources :lists do 
      resources :tasks
    end
  end
end
