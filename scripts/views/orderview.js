import OrderItemView from './orderitemview';
import ajaxConfig from './../ajax-config';


export default Backbone.View.extend({
  template: JST.order,

  events: {
    'click .remove-cart-item': 'removeFromOrder',
    'click .checkout-button': 'checkoutProcedure'
  },

  initialize: function() {
    console.log(this.model.drinks);
    this.render();
  },

  render: function() {
    this.$el.html(this.template({subtotal: this.model.findTotal()}));
    this.renderChildren();
  },

  removeFromOrder: function(e) {
    e.preventDefault();
    console.log(this.model.drinks);
    this.model.drinks.models.remove(this.model);
    this.render();
  },

  checkoutProcedure: function(e) {
    e.preventDefault();
    this.model.add();
    this.model.save();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.model.drinks.map(function(child) {
      var view = new OrderItemView({
        model: child
      });
      this.$('.shopping-cart-item-box').prepend(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

});
