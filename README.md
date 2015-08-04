# The Three Broomsticks

Our first big Backbone Application after a week of learning Backbone. I took the assignment and added a personal twist by incorporating Harry Potter into it. The Three Broomsticks is a fictional distillery with very odd libations. I included some of our tasks to see the structure in which I completed this application. As of writing this, only the home and distillery pages are live.

## Requirements

###Normal Mode

A "client" has approached you and asked you to help them build a web presence. They are a local Thai restaurant called Majestic Thai. They don't know anything about the Internet, but they know they need a web page. They want an interactive menu that displays all of their food choices with prices, descriptions, etc. They also want the customer to be able to select menu items and create an order with a total price. When the user saves the order, it should create a new item on the backend so that the kitchen can process the order.

Create a Backbone.js app, using Parse as a backend, to create a dynamically updating menu page. See Additional Resources for an example.

## Task List

### Getting Started

 - Setup the scaffolding and install Backbone
 - Setup templates for the different dynamic portions of the application
 - Produce static data for the menu items
 - Produce a functional static mockup


### Menu

 - Render a template for each menu item, not according to category.
 - Define a FoodListView constructor
 - Make a view instance responsible instead of just a template for the collection.
 - Define a FoodItemView constructor
 - Use the renderChildren method to render a child view for each food item
 - Define a Order constructor
 - Create an instance of Order
 - Pass the order to the child views
 - console.log the order when I click on the foods price
 - Add the food model to the order
 - Define a FoodCategoryView constructor
 - Make instances of FoodCategoryView for each category, moving the 'renderChildren' method down a level.
 - Make a instance of FoodCategoryView for popularity

### Order view

 - Define an OrderView constructor
 - Render an instance of OrderView
 - In OrderView, console.log the order
 - In OrderView, console.log a food model every time a food model is added to the order
 - Render the data from the order every time the order is updated
 - In Order, define a subtotal function that calculates the total price.
 - console.log, then render, every time the order is updated

### Order data

 - Save the order data to Parse when the order is submitted

### You can see this app live at http://austineady.github.io/7.4-three-broomsticks and you can see more of my work and learn about me at http://austineady.com
