Gist.Views.GistDetail = Backbone.View.extend(
  {
    tagName: "li",
    template: JST['gist/gist_detail'],
    render: function(){
      var renderContent = this.template({gist: this.model});
      this.$el.html(renderContent);
      return this;
    }
  }
);