export default Backbone.View.extend({
  template: JST.item,

  events: {
    'click .add-to-cart-button': 'addToOrder'
  },

  initialize: function() {
    this.drinks = this.collection.drinks;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToOrder: function(e) {
    e.preventDefault();
    this.drinks.add(this.model);
    this.render();
  }

});
