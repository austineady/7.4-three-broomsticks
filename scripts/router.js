import IndexView from './views/indexview';
import ListView from './views/listview';
import ajaxConfig from './ajax-config';
import OrderView from './views/orderview';
import CheckoutView from './views/checkoutview';


import {UserCollection} from './models/usermodel';
import {DrinkCollection} from './models/drinkcollection';
import {Order} from './models/order';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'distillery': 'distillery',
    'distillery/:username': 'userDistillery',
    'checkout': 'checkout'
  },

  initialize: function() {
    //stuff
  },

  index: function() {
    var users = new UserCollection();
    users.fetch().then(function() {
      var view = new IndexView({collection: users});
      $('body').html(view.el);
    });
  },

  distillery: function() {
    var drinks = new DrinkCollection();
    var order = new Order();
    //upon loading the page, go get the data
    drinks.fetch().then(function(collection) {
      //Parse returns your data under a results object
      var collectionArray = collection.results;
      //send that data as a collection in the view rendering my entire menu list
      //also send along the order model so that the menu items have access
      var view = new ListView({
        collection: collectionArray,
        model: order
        });
      $('body').html(view.el);
    });
  },

  userDistillery: function(username) {
    var drinks = new DrinkCollection();
    var order = new Order();
    console.log(username);
    //upon loading the page, go get the data
    drinks.fetch().then(function(collection) {
      //Parse returns your data under a results object
      var collectionArray = collection.results;
      //send that data as a collection in the view rendering my entire menu list
      //also send along the order model so that the menu items have access
      var view = new ListView({
        collection: collectionArray,
        model: order
        });
      $('body').html(view.el);
    });
  },

  checkout: function() {
    //make me a new order but fill it with the orders the customer has sent to parse
    var order = new Order();
    order.fetch().then(function(order) {
      //send the order object to the checkout view so that the data is usable
      var view = new CheckoutView({
        model: order
      });
      $('body').html(view.el);
    });
  }

});

export default Router;
