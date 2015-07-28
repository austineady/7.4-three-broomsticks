this["JST"] = this["JST"] || {};
this["JST"]["cart"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"cartbox\">\n  <i class=\"fa fa-shopping-cart\"></i>\n  <span class=\"item-number-text\">"
    + alias3(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"length","hash":{},"data":data}) : helper)))
    + "</span>\n  <i class=\"fa fa-sort\"></i>\n  <button class=\"drop-footer\"></button>\n</div>\n<div class=\"shopping-cart-item-box\">\n    <h1>"
    + alias3(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n";
},"useData":true});
this["JST"]["checkout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"checkout-content\">\n  <header class=\"indexheader\">\n  </header>\n  <div class=\"checkout-item-container\">\n  </div>\n  <footer class=\"shopping-cart\">\n    <div class=\"shopping-cart-item-box\">\n      <div class=\"subtotal-box\">\n        <span class=\"subtotal-text\">Subtotal:</span>\n        <span class=\"cart-subtotal\">$ "
    + this.escapeExpression(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</span>\n      </div>\n    </div>\n  </footer>\n</section>\n";
},"useData":true});
this["JST"]["checkoutitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<img src=\""
    + alias3(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" class=\"drink-item-picture\">\n<h1 class=\"drink-item name-text\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n<p class=\"drink-item description-text\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n<h2 class=\"drink-text\">Ingredients</h2>\n<h3 class=\"drink-item contents-text\">"
    + alias3(((helper = (helper = helpers.contents || (depth0 != null ? depth0.contents : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contents","hash":{},"data":data}) : helper)))
    + "</h3>\n<span class=\"drink-item abv-text\">"
    + alias3(((helper = (helper = helpers.abv || (depth0 != null ? depth0.abv : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"abv","hash":{},"data":data}) : helper)))
    + " abv</span>\n<span class=\"drink-item price-text\">$ "
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + " / barrel</span>\n";
},"useData":true});
this["JST"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"indexheader\">\n  <h2 class=\"nav about\">About Us</h2>\n  <a href=\"#/distillery\"><h2 class=\"nav distillery\">Distillery</h2></a>\n  <h2 class=\"nav inn\">Inn</h2>\n  <button class=\"nav login\">Log In</button>\n  <div class=\"log-in-container\">\n    <form class=\"log-in-form\">\n      <input type=\"text\" class=\"username-input\" placeholder=\"username\">\n      <input type=\"password\" class=\"password-input\" placeholder=\"password\">\n      <input type=\"submit\" value=\"Log In\" class=\"log-in-button\">\n      <button class=\"new-user-button\">Are you new?</button>\n    </form>\n    <form class=\"new-user-form\">\n      <input type=\"text\" class=\"new-user-username-input\" placeholder=\"New Username\">\n      <input type=\"text\" class=\"new-user-password-input\" placeholder=\"Password\">\n      <input type=\"text\" class=\"new-user-phone-number\" placeholder=\"Phone Number\">\n      <input type=\"text\" class=\"new-user-email-address\" placeholder=\"Email Address\">\n      <input type=\"submit\" class=\"new-user-submit\">\n    </form>\n  </div>\n</header>\n\n<section class=\"indexcontent\">\n\n</section>\n";
},"useData":true});
this["JST"]["item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"drink-item-container\">\n  <img src=\""
    + alias3(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" class=\"drink-item-picture\">\n  <h1 class=\"drink-item name-text\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n  <p class=\"drink-item description-text\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n  <h2 class=\"drink-text\">Ingredients</h2>\n  <h3 class=\"drink-item contents-text\">"
    + alias3(((helper = (helper = helpers.contents || (depth0 != null ? depth0.contents : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contents","hash":{},"data":data}) : helper)))
    + "</h3>\n  <span class=\"drink-item abv-text\">"
    + alias3(((helper = (helper = helpers.abv || (depth0 != null ? depth0.abv : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"abv","hash":{},"data":data}) : helper)))
    + " abv</span>\n  <span class=\"drink-item price-text\">$ "
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + " / barrel</span>\n  <button class=\"add-to-cart-button\">Add to cart</button>\n</li>\n";
},"useData":true});
this["JST"]["list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"indexheader\">\n  <h2 class=\"nav about\">About Us</h2>\n  <a href=\"#/distillery\"><h2 class=\"nav distillery\">Distillery</h2></a>\n  <h2 class=\"nav inn\">Inn</h2>\n  <h2 class=\"nav user\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h2>\n</header>\n<section class=\"distillery-content\">\n  <div class=\"distillery-header-background\"></div>\n  <div class=\"distillery-header-background-two\"></div>\n  <img src=\"./assets/logoandname.gif\" class=\"distillery-logo-bg\">\n  <ul class=\"list-container\"></ul>\n  <footer class=\"shopping-cart\"></footer>\n</section>\n";
},"useData":true});
this["JST"]["order"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"cartbox\">\n  "
    + alias1(helpers.log.call(depth0,depth0,{"name":"log","hash":{},"data":data}))
    + "\n  <i class=\"fa fa-shopping-cart\"></i>\n  <span class=\"item-number-text\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\n  <i class=\"fa fa-sort\"></i>\n  <button class=\"drop-footer\"></button>\n</div>\n<div class=\"shopping-cart-item-box\">\n    <div class=\"subtotal-box\">\n      <span class=\"subtotal-text\">Subtotal:</span>\n      <span class=\"cart-subtotal\">$ "
    + alias1(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</span>\n      <a href=\"#/checkout\" class=\"checkout-button\">Checkout</a>\n    </div>\n</div>\n";
},"useData":true});
this["JST"]["orderitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"cart-item\">\n  <button class=\"remove-cart-item\">x</button>\n  <span class=\"cart-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n  <span class=\"cart-price\">$ "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.price : stack1), depth0))
    + "</span>\n</div>\n";
},"useData":true});