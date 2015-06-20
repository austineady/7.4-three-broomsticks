import {DrinkCollection} from './drinkcollection';

var Order = Backbone.Model.extend({

  idAttribute: 'objectId',

  urlRoot: 'https://api.parse.com/1/classes/Orders',

  total: 0,

  defaults: {
    name: ''
  },

  initialize: function() {
    // Create a drink collection to keep track of
    this.drinks = new DrinkCollection();

    // Trigger all tasks events on myself
    this.listenTo(this.drinks, 'all', this.trigger.bind(this));
  },

  add: function(models, options) {
    this.drinks.add(models, options);
  },

  remove: function(models, options) {
    this.drinks.remove(models, options);
  },

  toJSON: function() {
    return _.extend({}, this.attributes, {
      drinks: this.drinks.map(function(drink) {
        return {
          "__type": "Pointer",
          "clasName": "Drinks",
          "objectId": drink.id
        };
      })
    });
  },

  findTotal: function() {
    return this.drinks.reduce(function(a, b) {
      return a + b.get('price');
    }, 0);
  }
});


export default {Order};
