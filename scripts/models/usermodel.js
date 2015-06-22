var User = Backbone.Model.extend({
  idAttribute: "objectId"
});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: 'https://api.parse.com/1/users'
});

export default{User, UserCollection};
