window.Gist = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
     console.log('Hello from Backbone!');
     this.gists = new Gist.Collections.Gists();
     this.gists.fetch({
       success: function(){
         new Gist.Routers.router($('#content'));
         Backbone.history.start();
       }
     });
  }
};