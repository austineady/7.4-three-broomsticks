export default Backbone.View.extend({
  template: JST.order,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      item: this.model.drinks.models,
      subtotal: this.model.findTotal()
    }));
  }

});
