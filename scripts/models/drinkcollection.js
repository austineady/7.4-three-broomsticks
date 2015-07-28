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

export default {Drink, DrinkCollection}
