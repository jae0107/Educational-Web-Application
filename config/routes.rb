Rails.application.routes.draw do
  devise_for :users
  root to: 'welcome#index'
  # get 'welcome/index'

  resources :welcome

  resources :codes do
    resources :correct_answers
    resources :student_answers
    resources :team_answers
    resources :discussions
  end

  resources :student_answers, only: [] do
    collection do
      post :submit
      post :save_score
    end
  end

  resources :discussions do |
|    resources :comments
  end

  resources :users

  resources :var_roles

  resources :courses do
    resources :course_users
    resources :quizzes
  end

  resources :quizzes do
    post :judge_deadline, on: :collection
    resources :codes
  end

  resources :course_users do
    collection { post :import}
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
