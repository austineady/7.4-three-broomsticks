export default Backbone.View.extend({
  template: JST.item,

  events: {
    'click .add-to-cart-button': 'addToOrder'
  },

  initialize: function() {
    //this.collection is now the ORDER Model because I passed it through on the collection property.
    //the order collection nested inside of the Order model is called drinks.
    this.drinks = this.collection.drinks;
    this.render();
  },

  render: function() {
    //take each list item(this.model) and display it with it's own template(JST.item)
    this.$el.html(this.template(this.model));
  },

  addToOrder: function(e) {
    e.preventDefault();
    //upon clicking add to cart, take this individual list item(this.model),
    //and add it to the Order Model collection made in initialize(this.drinks)
    this.drinks.add(this.model);
    this.render();
  }

});
