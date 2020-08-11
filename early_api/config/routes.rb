Rails.application.routes.draw do
  resources :skills
  resources :admins
  resources :teachers
  resources :caregivers
  resources :children
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
