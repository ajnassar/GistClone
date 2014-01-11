Gist.Views.GistsIndex = Backbone.View.extend(
  {
    template: JST['gist/gist_index'],
    render: function(){
      var that = this;
      var renderContent = this.template({gists: this.collection})
      this.$el.html(renderContent);
      var gistlistUL = that.$el.find('ul#gistlist');
      this.collection.each(function(gist){
        var tempgist = new Gist.Views.GistDetail({model: gist});
        gistlistUL.append(tempgist.render().$el);
      });
      return this
    }
  }
);