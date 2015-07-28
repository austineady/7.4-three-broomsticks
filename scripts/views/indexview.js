import AjaxUserConfig from './../ajax-user-config';
import Router from './../router';

export default Backbone.View.extend({
  template: JST.index,

  tagName: 'section',

  events: {
    'click .login': 'displayInput',
    'submit .log-in-form': 'loadUser',
    'click .new-user-button': 'displayUserForm',
    'submit .new-user-form': 'saveUser'
  },

  initialize: function() {
    console.log(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  displayInput: function(e) {
    e.preventDefault();
    this.$('.log-in-container').css('display', 'block');
  },

  displayUserForm: function(e) {
    e.preventDefault();
    this.$('.new-user-form').css('display', 'block');
  },

  loadUser: function(e) {
    e.preventDefault();
    var username = this.$('.username-input').val();
    var password = this.$('.password-input').val();
    var userData = this.collection.models[0].attributes.results.where({
      username: username,
      password: password
    });
    if(userData.length > 0) {
      console.log(userData);
    } else {
      console.log('Bad Data');
    }
  },

  saveUser: function(e) {
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
    router.navigate('distillery/username', {trigger: true});
  }
});

//this is just the landing page
