var SearchView = Backbone.View.extend({
  model: Video,
  
  initialize: function() {
    this.on('change', this.render(), this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  search: function(query) {
    this.collection.on('change', model.search());
  },

  template: templateURL('src/templates/search.html')

});
