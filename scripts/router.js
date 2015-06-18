import IndexView from './views/indexview';
import ListView from './views/listview';

import {DrinkCollection} from './models/drinkcollection';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'distillery': 'distillery'
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
    drinks.fetch({beforeSend: this.setHeader}).then(function(collection) {
      var collectionArray = collection.results;
      var view = new ListView({collection: collectionArray});
      $('body').html(view.el);
    });
  },

  setHeader: function (xhr) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Parse-Application-Id', 'xk7dyV6rELXA2YWeHvC2BJSIODrWiFrEZYe5WWrC');
    xhr.setRequestHeader('X-Parse-REST-API-Key', 'XsVLvXkyqd0nubMpXyywzBvb4xHBDaNM0LI7czWZ');
  },
});

var router = new Router();
export default router;
