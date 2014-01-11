class GistsController < ApplicationController
  def index
    @gists = current_user.gists
    render :json => @gists
  end

  def show
    @gist = Gist.find(params[:id])
    if @gist
      render :json => @gist
    else
      render :json => @gist.error_messages
    end
  end
end
