export default Backbone.View.extend({
  template: JST.checkout,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
