var SearchView = Backbone.View.extend({
  
  initialize: function() {
    this.on('change', this.render(), this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
