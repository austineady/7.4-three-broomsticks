import CheckoutItemView from './checkoutitemview';

export default Backbone.View.extend({
  template: JST.checkout,

  initialize: function() {
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(/*{subtotal: this.model.findTotal()}*/));
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

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
