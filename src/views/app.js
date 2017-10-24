var AppView = Backbone.View.extend({
  model: Video,
  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    
    this.render();
    
    new VideoPlayerView({
      el: '.player'
    });
    
    new VideoListView({
      el: '.list',
      collection: this.videos
    });
    
    new SearchView({
      el: '.search'
    });
    
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },


  template: templateURL('src/templates/app.html')

});


