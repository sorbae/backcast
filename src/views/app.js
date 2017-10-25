var AppView = Backbone.View.extend({
  model: Video,
  el: '#app',
  
  initialize: function() {
    this.render();
    this.collection = new Videos(exampleVideoData);
    this.collection.fetch({
      data: {
        q: 'pikachu',
        key: 'AIzaSyA8_E2B8PY3Dku7bNyex6zxpcfLLDVjeD0',
        maxResults: '5',
        part: 'snippet'
      },
      success: function(data) {
        console.log(data);
      }
    });
    new VideoPlayerView({
      el: '.player',
      model: this.collection.models[0]
    });
    
    new VideoListView({
      el: '.list',
      collection: this.collection
    });
    
    new SearchView({
      el: '.search',
      collection: this.collection
    });
    
    
  },
  
  // search: function(query) {

  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },


  template: templateURL('src/templates/app.html')

});


