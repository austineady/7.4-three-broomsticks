export default Backbone.View.extend({
  template: JST.orderitem,

  events: {
    'click .remove-cart-item': 'removeFromCart'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  removeFromCart: function() {
    //upon clicking the [x] button next to the item, remove yourself the Order Model's collection
    this.model.collection.remove(this.model);
  }
});
