NewAuthDemo::Application.routes.draw do
  resources :gists, :only => [:index, :show] do
    resources :favorites, :only => [:create, :destroy]
  end
  resources :favorites, :only => [:index]
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  root :to => "root#root"
end
