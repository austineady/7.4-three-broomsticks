import {DrinkCollection} from './drinkcollection';

var Order = Backbone.Model.extend({

  idAttribute: 'objectId',

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
  }
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://api.parse.com/1/classes/Orders'
});
