NewAuthDemo::Application.routes.draw do
  resources :gists, :only => [:index, :show]
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  root :to => "root#root"
end
