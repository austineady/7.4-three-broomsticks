$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'xk7dyV6rELXA2YWeHvC2BJSIODrWiFrEZYe5WWrC';
    options.headers['X-Parse-REST-API-Key'] = 'XsVLvXkyqd0nubMpXyywzBvb4xHBDaNM0LI7czWZ';
  }
});
