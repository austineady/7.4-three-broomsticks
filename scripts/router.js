import IndexView from './views/indexview';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    //stuff
  },

  index: function() {
    var view = new IndexView();
    $('body').html(view.el);
  }
});

var router = new Router();
export default router;
