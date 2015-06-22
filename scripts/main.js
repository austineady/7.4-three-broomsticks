import Router from './router';

(function(){
  'use strict';

  $(document).ready(function(){
    window.router = new Router();
    Backbone.history.start();
  });
})();
