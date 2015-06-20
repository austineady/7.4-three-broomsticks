import ListItemView from './listitem';
import OrderView from './orderview';

export default Backbone.View.extend({
  template: JST.list,

  order: '',

  total: 0,

  events: {
    'click .add-to-cart-button': 'displayFoot',
    'click .drop-footer': 'displayItems',
    'click .drop-footer-down': 'hideItems'
  },

  initialize: function() {
    console.log(this.model);
    this.render();
    this.listenTo(this.model, 'add remove', this.displayFoot);
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },

  displayFoot: function() {
    var orderview = new OrderView({model: this.model});
    $('.shopping-cart').html(orderview.el);
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
