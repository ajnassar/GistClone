class FavoritesController < ApplicationController
  def create
    params[:favorites][:user_id] = current_user
    params[:favorites][:gist_id] = params[:gist_id]
    @favorite = new Favorite(params[:favorites])

    if @favorite
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages
    end
  end

  def destroy
    # @favorite = Favorite.find_by_user_id_and_gist_id()
  end

end
