Gist.Routers.router = Backbone.Router.extend(
  {
    routes: {
      "":"gistsIndex",
      "gists/:gist_id":"gistDetail"
    },

    gistDetails: function(gist_id){
      var gist = Gist.gists.get(gist_id)
      var gistdetail = new Gist.Views.GistDetail({model: gist})
      this._swapView(gistdetail)
    },
    gistsIndex: function(){
      var gistIndex = new Gist.Views.GistsIndex({collection: Gist.gists});
      this._swapView(gistIndex)
    },

    initialize: function($rootEl){
      this.$rootEl = $rootEl;
    },

    _swapView: function(newView){
      this._currentView && this._currentView.remove();
      this._currentView = newView;
      this.$rootEl.html(newView.render().$el)
    }
  }
);