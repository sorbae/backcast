var VideoListEntryView = Backbone.View.extend({
  
  model: Video,
    
  events: {
    'click': 'handleClick' 
  },
  
  initialize: function() {
    this.render();
  },
  
  handleClick: function(e) {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
});