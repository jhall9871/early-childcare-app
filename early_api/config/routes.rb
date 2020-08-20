Rails.application.routes.draw do
  root 'welcome#index'
  
  resources :messages

  get '/messages/byteacher/:teacher_id', to:'messages#messages_by_teacher', as: 'teacher_messages'

  resources :abilities
  resources :families
  resources :classrooms
  resources :skills
  resources :admins
  resources :teachers

  get '/teachers/fromcaregiver/:caregiver_id', to: 'teachers#teachers_from_caregiver', as: 'teachers_from_caregiver'


  resources :caregivers

  get '/caregivers/fromteacher/:teacher_id', to: 'caregivers#caregivers_from_teacher', as: 'caregiver_from_teacher'

  resources :children
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
