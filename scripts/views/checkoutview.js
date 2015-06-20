import CheckoutItemView from './checkoutitemview';

export default Backbone.View.extend({
  template: JST.checkout,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(/*{subtotal: this.model.findTotal()}*/));
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');
    //I created a checkout item view for children in case a user wanted to,
    //change their order at the last minute
    //I got the data back from parse pretty nested
    // (this.model.results[0].orders was the array of ordered items)
    this.children = this.model.results[0].orders.map(function(child) {
      var view = new CheckoutItemView({
        model: child
      });
      this.$('.checkout-item-container').append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
