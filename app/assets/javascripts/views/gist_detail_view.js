Gist.Views.GistDetail = Backbone.View.extend(
  {
    tagName: "li",
    template: JST['gist/gist_detail'],
    events:{
      "click button.favorite":"favorite",
      "click button.unfavorite":"unfavorite",
    },
    initialize: function(){
      this.listenTo(this.model, "add remove", this.render())
    },
    render: function(){
      var renderContent = this.template({gist: this.model});
      this.$el.html(renderContent);
      return this;
    },
    favorite: function(event){
      event.preventDefault();
      // var id = $(event.currentTarget).get('id')
      // console.log($(event.currentTarget))

      //favorite gist for user
      //change the class name of button
      //change the text of the button
    },
    unfavorite: function(event){

    }
  }
);