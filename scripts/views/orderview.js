export default Backbone.View.extend({
  template: JST.order,

  events: {
    //'click .remove-cart-item': 'removeFromOrder'
  },

  initialize: function() {
    console.log(this.model.drinks);
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      item: this.model.drinks.models,
      subtotal: this.model.findTotal()
    }));
  },

  // removeFromOrder: function(e) {
  //   e.preventDefault();
  //   this.model.drinks.remove(this.model);
  //   this.render();
  // }

});
