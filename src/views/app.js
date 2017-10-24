var AppView = Backbone.View.extend({
  model: Video,
  el: '#app',

  initialize: function() {
    this.render();
    this.collection = new Videos(window.exampleVideoData);
    
    new VideoPlayerView({
      el: '.player'
    });
    
    new VideoListView({
      el: '.list',
      collection: this.collection
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


