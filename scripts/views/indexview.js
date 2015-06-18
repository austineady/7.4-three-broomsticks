export default Backbone.View.extend({
  template: JST.index,

  tagName: 'section',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
