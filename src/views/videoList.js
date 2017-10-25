var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    this.collection.on('sync', function() {
      this.render();      
    }, this);
  },

  render: function() {
    
    this.$el.html(this.template());
    
    this.$el.find('.video-list').append(this.collection.map(video => 
      (new VideoListEntryView({model: video})).$el));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
