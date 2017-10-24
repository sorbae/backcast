var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // this.render();
    this.on('change', this.render(), this);
    _.each(this.collection, video => {
      new VideoListEntryView({
        el: '.video-list div',
        video: video
      });
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
