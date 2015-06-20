import IndexView from './views/indexview';
import ListView from './views/listview';
import ajaxConfig from './ajax-config';
import OrderView from './views/orderview';
import CheckoutView from './views/checkoutview';

import {DrinkCollection} from './models/drinkcollection';
import {Order} from './models/project';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'distillery': 'distillery',
    'checkout': 'checkout'
  },

  initialize: function() {
    //stuff
  },

  index: function() {
    var view = new IndexView();
    $('body').html(view.el);
  },

  distillery: function() {
    var drinks = new DrinkCollection();
    var order = new Order();
    drinks.fetch().then(function(collection) {
      var collectionArray = collection.results;
      var view = new ListView({
        collection: collectionArray,
        model: order
        });
      $('body').html(view.el);
    });
  },

  checkout: function() {
    var view = new CheckoutView();
    $('body').html(view.el);
  }
  //
  // setHeader: function (xhr) {
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.setRequestHeader('X-Parse-Application-Id', 'xk7dyV6rELXA2YWeHvC2BJSIODrWiFrEZYe5WWrC');
  //   xhr.setRequestHeader('X-Parse-REST-API-Key', 'XsVLvXkyqd0nubMpXyywzBvb4xHBDaNM0LI7czWZ');
  // },
});

var router = new Router();
export default router;
