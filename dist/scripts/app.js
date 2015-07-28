require.register("ajax-config", function(exports, require, module){
  'use strict';

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (options.url.match(/api.parse.com/)) {
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'xk7dyV6rELXA2YWeHvC2BJSIODrWiFrEZYe5WWrC';
    options.headers['X-Parse-REST-API-Key'] = 'XsVLvXkyqd0nubMpXyywzBvb4xHBDaNM0LI7czWZ';
  }
});
  
});

require.register("ajax-user-config", function(exports, require, module){
  "use strict";

// $.ajaxPrefilter(function(options, originalOptions, jqXHR){
//   if(options.url.match(/api.parse.com/)){
//     options.headers = options.headers || {};
//     options.headers['X-Parse-Application-Id'] = 'xk7dyV6rELXA2YWeHvC2BJSIODrWiFrEZYe5WWrC';
//     options.headers['X-Parse-REST-API-Key'] = 'XsVLvXkyqd0nubMpXyywzBvb4xHBDaNM0LI7czWZ';
//     options.headers['X-Parse-Revocable-Session'] = '1';
//   }
// });
  
});

require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {
    window.router = new _router2['default']();
    Backbone.history.start();
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndexview = require('./views/indexview');

var _viewsIndexview2 = _interopRequireDefault(_viewsIndexview);

var _viewsListview = require('./views/listview');

var _viewsListview2 = _interopRequireDefault(_viewsListview);

var _ajaxConfig = require('./ajax-config');

var _ajaxConfig2 = _interopRequireDefault(_ajaxConfig);

var _viewsOrderview = require('./views/orderview');

var _viewsOrderview2 = _interopRequireDefault(_viewsOrderview);

var _viewsCheckoutview = require('./views/checkoutview');

var _viewsCheckoutview2 = _interopRequireDefault(_viewsCheckoutview);

var _modelsUsermodel = require('./models/usermodel');

var _modelsDrinkcollection = require('./models/drinkcollection');

var _modelsOrder = require('./models/order');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'distillery': 'distillery',
    'distillery/:username': 'userDistillery',
    'checkout': 'checkout'
  },

  initialize: function initialize() {},

  index: function index() {
    var users = new _modelsUsermodel.UserCollection();
    users.fetch().then(function () {
      var view = new _viewsIndexview2['default']({ collection: users });
      $('body').html(view.el);
    });
  },

  distillery: function distillery() {
    var drinks = new _modelsDrinkcollection.DrinkCollection();
    var order = new _modelsOrder.Order();
    //upon loading the page, go get the data
    drinks.fetch().then(function (collection) {
      //Parse returns your data under a results object
      var collectionArray = collection.results;
      //send that data as a collection in the view rendering my entire menu list
      //also send along the order model so that the menu items have access
      var view = new _viewsListview2['default']({
        collection: collectionArray,
        model: order
      });
      $('body').html(view.el);
    });
  },

  userDistillery: function userDistillery(username) {
    var drinks = new _modelsDrinkcollection.DrinkCollection();
    var order = new _modelsOrder.Order();
    console.log(username);
    //upon loading the page, go get the data
    drinks.fetch().then(function (collection) {
      //Parse returns your data under a results object
      var collectionArray = collection.results;
      //send that data as a collection in the view rendering my entire menu list
      //also send along the order model so that the menu items have access
      var view = new _viewsListview2['default']({
        collection: collectionArray,
        model: order
      });
      $('body').html(view.el);
    });
  },

  checkout: function checkout() {
    //make me a new order but fill it with the orders the customer has sent to parse
    var order = new _modelsOrder.Order();
    order.fetch().then(function (order) {
      //send the order object to the checkout view so that the data is usable
      var view = new _viewsCheckoutview2['default']({
        model: order
      });
      $('body').html(view.el);
    });
  }

});

exports['default'] = Router;
module.exports = exports['default'];

//stuff
  
});

require.register("models/drinkcollection", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Drink = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    name: '',
    contents: '',
    description: '',
    abv: '',
    price: ''
  }
});

var DrinkCollection = Backbone.Collection.extend({
  model: Drink,
  url: 'https://api.parse.com/1/classes/Drinks'
});

exports['default'] = { Drink: Drink, DrinkCollection: DrinkCollection };
module.exports = exports['default'];
  
});

require.register("models/order", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _drinkcollection = require('./drinkcollection');

var Order = Backbone.Model.extend({

  idAttribute: 'objectId',

  urlRoot: 'https://api.parse.com/1/classes/Orders',
  //this ready state is for final decisions, upon imaginary payment, I would,
  //set ready to true so that the restaraunt knows for certain they can make the item
  ready: false,

  defaults: {
    name: ''
  },

  initialize: function initialize() {
    //creates a collection as a property on the model
    //this is so that we can save the model to Parse
    this.drinks = new _drinkcollection.DrinkCollection();

    // Trigger all tasks events on myself
    this.listenTo(this.drinks, 'all', this.trigger.bind(this));
  },

  add: function add(models, options) {
    this.drinks.add(models, options);
  },

  remove: function remove(models, options) {
    this.drinks.remove(models, options);
  },

  toJSON: function toJSON() {
    //this basically creates an empty object and puts attributes on that object
    return _.extend({}, this.attributes, {
      drinks: this.drinks.map(function (drink) {
        return {
          //this shit is in there so Parse knows it,
          //is receiving an Object
          '__type': 'Pointer',
          'className': 'Drinks',
          'objectId': drink.id
        };
      }),
      //this is how I got the info to show in parse
      //this is where the food items will be held
      orders: this.drinks.map(function (drink) {
        return {
          'orders': drink
        };
      })
    });
  },
  //this is the function to find the subtotal of all ordered items
  findTotal: function findTotal() {
    return this.drinks.reduce(function (a, b) {
      return a + b.get('price');
    }, 0);
  }
});

exports['default'] = { Order: Order };
module.exports = exports['default'];
  
});

require.register("models/usermodel", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var User = Backbone.Model.extend({
  idAttribute: "objectId"
});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: "https://api.parse.com/1/users"
});

exports["default"] = { User: User, UserCollection: UserCollection };
module.exports = exports["default"];
  
});

require.register("views/checkoutitemview", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.checkoutitem,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.orders));
  }
});
module.exports = exports["default"];
  
});

require.register("views/checkoutview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _checkoutitemview = require('./checkoutitemview');

var _checkoutitemview2 = _interopRequireDefault(_checkoutitemview);

exports['default'] = Backbone.View.extend({
  template: JST.checkout,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');
    //I created a checkout item view for children in case a user wanted to,
    //change their order at the last minute
    //I got the data back from parse pretty nested
    // (this.model.results[0].orders was the array of ordered items)
    this.children = this.model.results[0].orders.map((function (child) {
      var view = new _checkoutitemview2['default']({
        model: child
      });
      this.$('.checkout-item-container').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
/*{subtotal: this.model.findTotal()}*/
  
});

require.register("views/indexview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ajaxUserConfig = require('./../ajax-user-config');

var _ajaxUserConfig2 = _interopRequireDefault(_ajaxUserConfig);

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

exports['default'] = Backbone.View.extend({
  template: JST.index,

  tagName: 'section',

  events: {
    'click .login': 'displayInput',
    'submit .log-in-form': 'loadUser',
    'click .new-user-button': 'displayUserForm',
    'submit .new-user-form': 'saveUser'
  },

  initialize: function initialize() {
    console.log(this.collection);
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
  },

  displayInput: function displayInput(e) {
    e.preventDefault();
    this.$('.log-in-container').css('display', 'block');
  },

  displayUserForm: function displayUserForm(e) {
    e.preventDefault();
    this.$('.new-user-form').css('display', 'block');
  },

  loadUser: function loadUser(e) {
    e.preventDefault();
    var username = this.$('.username-input').val();
    var password = this.$('.password-input').val();
    var userData = this.collection.models[0].attributes.results.where({
      username: username,
      password: password
    });
    if (userData.length > 0) {
      console.log(userData);
    } else {
      console.log('Bad Data');
    }
  },

  saveUser: function saveUser(e) {
    e.preventDefault();
    var username = this.$('.new-user-username-input').val();
    var password = this.$('.new-user-password-input').val();
    var phonenumber = this.$('.new-user-phone-number').val();
    var email = this.$('.new-user-email-address').val();
    console.log(username, password, phonenumber, email);
    this.collection.create({
      username: username,
      password: password,
      phonenumber: phonenumber,
      email: email
    });
    router.navigate('distillery/username', { trigger: true });
  }
});

//this is just the landing page
module.exports = exports['default'];
  
});

require.register("views/listitem", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.item,

  events: {
    'click .add-to-cart-button': 'addToOrder'
  },

  initialize: function initialize() {
    //this.collection is now the ORDER Model because I passed it through on the collection property.
    //the order collection nested inside of the Order model is called drinks.
    this.drinks = this.collection.drinks;
    this.render();
  },

  render: function render() {
    //take each list item(this.model) and display it with it's own template(JST.item)
    this.$el.html(this.template(this.model));
  },

  addToOrder: function addToOrder(e) {
    e.preventDefault();
    //upon clicking add to cart, take this individual list item(this.model),
    //and add it to the Order Model collection made in initialize(this.drinks)
    this.drinks.add(this.model);
    this.render();
  }

});
module.exports = exports['default'];
  
});

require.register("views/listview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _listitem = require('./listitem');

var _listitem2 = _interopRequireDefault(_listitem);

var _orderview = require('./orderview');

var _orderview2 = _interopRequireDefault(_orderview);

exports['default'] = Backbone.View.extend({

  template: JST.list,

  events: {
    //when a user clicks on add to cart, the footer should show at the bottom
    'click .add-to-cart-button': 'displayFoot',
    //if the user wants to see what is currently in checkout que, they can click the arrow
    'click .drop-footer': 'displayItems',
    //if the user wants to hide what is in the checkout que, they can re-click the arrow
    'click .drop-footer-down': 'hideItems'
  },

  initialize: function initialize() {
    this.render();
    //listen to the ORDER model, for any add or remove events and upon adding or removing, re-render the footer
    this.listenTo(this.model, 'add remove', this.displayFoot);
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },

  displayFoot: function displayFoot() {
    //if the user has clicked on an item and the collection inside of the model is > 0, display footer
    if (this.model.drinks.length > 0) {
      //if the user has added an item to the order, send along the model to the orderView to display it
      var orderview = new _orderview2['default']({ model: this.model });
      $('.shopping-cart').html(orderview.el);
      //upon clicking an item, show the contents they just clicked (optional)
      this.$('.shopping-cart-item-box').css('display', 'block');
      this.$('.drop-footer').className = 'drop-footer-down';
    } else {
      //if the user has removed an item and no items are in checkout queue, empty footer contents
      $('.shopping-cart').html('');
    }
  },

  displayItems: function displayItems(e) {
    this.$('.shopping-cart-item-box').css('display', 'block');
    e.target.className = 'drop-footer-down';
  },

  hideItems: function hideItems(e) {
    this.$('.shopping-cart-item-box').css('display', 'none');
    e.target.className = 'drop-footer';
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      //take each item in the collection of items and give it it's own view
      //this will allow you to narrow down an event to an individual model
      //each view also needs access to the ORDER model, since each list item is taken by the model property,
      //send the order model through as collection
      var view = new _listitem2['default']({
        model: child,
        collection: this.model
      });
      this.$('.list-container').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/orderitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.orderitem,

  events: {
    'click .remove-cart-item': 'removeFromCart'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  removeFromCart: function removeFromCart() {
    //upon clicking the [x] button next to the item, remove yourself the Order Model's collection
    this.model.collection.remove(this.model);
  }
});
module.exports = exports['default'];
  
});

require.register("views/orderview", function(exports, require, module){
  //both the individual order item views and the ajax config are needed
//without the ajax config, I would get autorization errors from parse
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _orderitemview = require('./orderitemview');

var _orderitemview2 = _interopRequireDefault(_orderitemview);

var _ajaxConfig = require('./../ajax-config');

var _ajaxConfig2 = _interopRequireDefault(_ajaxConfig);

exports['default'] = Backbone.View.extend({
  template: JST.order,

  events: {
    'click .checkout-button': 'checkoutProcedure'
  },

  initialize: function initialize() {
    //this.model is still the Order Model because I passed it through on the model property
    this.render();
  },

  render: function render() {
    //when the order is rendered with all ordered items, find the subtotal and pass it to the template
    this.$el.html(this.template({ subtotal: this.model.findTotal() }));
    this.renderChildren();
  },

  checkoutProcedure: function checkoutProcedure(e) {
    e.preventDefault();
    //upon clicking [checkout], take my model and add it to the server
    this.model.add();
    //save the model added, only after saving it will it show up on the Parse Website
    this.model.save();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');
    //take the collection of ordered items on the Order Model (this.model.drinks),
    //and give each item a view so that the user can remove them
    this.children = this.model.drinks.map((function (child) {
      var view = new _orderitemview2['default']({
        model: child
      });
      this.$('.shopping-cart-item-box').prepend(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map