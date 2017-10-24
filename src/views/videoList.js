var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.on('change', this.render(), this);
    _.each(this.collection.models, video => {
      new VideoListEntryView({
        el: '.video-list div',
        model: video
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
