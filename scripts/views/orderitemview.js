export default Backbone.View.extend({
  template: JST.orderitem,

  events: {
    'click .remove-cart-item': 'removeFromCart'
  },

  initialize: function() {
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  removeFromCart: function() {
    this.model.collection.remove(this.model);
  }
});
