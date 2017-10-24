var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    new VideoPlayerView();
    new VideoListView({collection: this.videos});
    new SearchView();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },


  template: templateURL('src/templates/app.html')

});


