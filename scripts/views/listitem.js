export default Backbone.View.extend({
  template: JST.item,

  events: {
    'click .add-to-cart-button': 'addToOrder'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToOrder: function(e) {
    e.preventDefault();
    this.collection.add(this.model);
    console.log(this.collection);
  }
});
