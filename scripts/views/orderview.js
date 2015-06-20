//both the individual order item views and the ajax config are needed
//without the ajax config, I would get autorization errors from parse
import OrderItemView from './orderitemview';
import ajaxConfig from './../ajax-config';


export default Backbone.View.extend({
  template: JST.order,

  events: {
    'click .checkout-button': 'checkoutProcedure'
  },

  initialize: function() {
    //this.model is still the Order Model because I passed it through on the model property
    this.render();
  },

  render: function() {
    //when the order is rendered with all ordered items, find the subtotal and pass it to the template
    this.$el.html(this.template({subtotal: this.model.findTotal()}));
    this.renderChildren();
  },

  checkoutProcedure: function(e) {
    e.preventDefault();
    //upon clicking [checkout], take my model and add it to the server
    this.model.add();
    //save the model added, only after saving it will it show up on the Parse Website
    this.model.save();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');
    //take the collection of ordered items on the Order Model (this.model.drinks),
    //and give each item a view so that the user can remove them
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
