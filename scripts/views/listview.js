import ListItemView from './listitem';

export default Backbone.View.extend({
  template: JST.list,

  order: '',

  events: {
    'click .add-to-cart-button': 'displayFoot',
    'click .drop-footer': 'displayItems',
    'click .drop-footer-down': 'hideItems'
  },

  initialize: function() {
    this.order = this.model;
    console.log(this.order);
    if(this.order.drinks.models.length === 0) {
      this.render();
    } else {
      this.render();
      this.displayFoot();
    }
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },

  displayFoot: function() {
    var orderItems = this.order.drinks.models;
    $('.shopping-cart').html(JST.cart({
      subtotal: 1,
      items: orderItems
    }));
  },
  
  displayItems: function(e) {
    this.$('.shopping-cart-item-box').css('display', 'block');
    e.target.className = 'drop-footer-down';
  },

  hideItems: function(e) {
    this.$('.shopping-cart-item-box').css('display', 'none');
    e.target.className = 'drop-footer';
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new ListItemView({
      model: child,
      collection: this.order
    });
    this.$('.list-container').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
});
