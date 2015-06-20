import {DrinkCollection} from './drinkcollection';

var Order = Backbone.Model.extend({

  idAttribute: 'objectId',

  urlRoot: 'https://api.parse.com/1/classes/Orders',
  //this ready state is for final decisions, upon imaginary payment, I would,
  //set ready to true so that the restaraunt knows for certain they can make the item
  ready: false,

  defaults: {
    name: ''
  },

  initialize: function() {
    //creates a collection as a property on the model
    //this is so that we can save the model to Parse
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
    //this basically creates an empty object and puts attributes on that object
    return _.extend({}, this.attributes, {
      drinks: this.drinks.map(function(drink) {
        return {
          //this shit is in there so Parse knows it,
          //is receiving an Object
          "__type": "Pointer",
          "className": "Drinks",
          "objectId": drink.id,
        };
      }),
      //this is how I got the info to show in parse
      //this is where the food items will be held
      orders: this.drinks.map(function(drink) {
        return {
          "orders": drink
        };
      })
    });
  },
  //this is the function to find the subtotal of all ordered items
  findTotal: function() {
    return this.drinks.reduce(function(a, b) {
      return a + b.get('price');
    }, 0);
  }
});


export default {Order};
