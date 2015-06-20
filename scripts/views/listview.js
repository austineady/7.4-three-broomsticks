import ListItemView from './listitem';
import OrderView from './orderview';

export default Backbone.View.extend({

  template: JST.list,

  events: {
    //when a user clicks on add to cart, the footer should show at the bottom
    'click .add-to-cart-button': 'displayFoot',
    //if the user wants to see what is currently in checkout que, they can click the arrow
    'click .drop-footer': 'displayItems',
    //if the user wants to hide what is in the checkout que, they can re-click the arrow
    'click .drop-footer-down': 'hideItems'
  },

  initialize: function() {
    this.render();
    //listen to the ORDER model, for any add or remove events and upon adding or removing, re-render the footer
    this.listenTo(this.model, 'add remove', this.displayFoot);
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },

  displayFoot: function() {
    //if the user has clicked on an item and the collection inside of the model is > 0, display footer
    if(this.model.drinks.length > 0) {
      //if the user has added an item to the order, send along the model to the orderView to display it
      var orderview = new OrderView({model: this.model});
      $('.shopping-cart').html(orderview.el);
      //upon clicking an item, show the contents they just clicked (optional)
      this.$('.shopping-cart-item-box').css('display', 'block');
      this.$('.drop-footer').className = 'drop-footer-down';
    } else {
      //if the user has removed an item and no items are in checkout queue, empty footer contents
      $('.shopping-cart').html('');
    }
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
    //take each item in the collection of items and give it it's own view
    //this will allow you to narrow down an event to an individual model
    //each view also needs access to the ORDER model, since each list item is taken by the model property,
    //send the order model through as collection
    var view = new ListItemView({
      model: child,
      collection: this.model
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
