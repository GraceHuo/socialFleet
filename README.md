# Social Fleet
An social media scheduler that allows us to automate the posts and schedule our Twitter posting.

## Two Tier
The server that’s hosting our Angular is running separately from what is hosting our web API with Sails. The scheduler is running on another separate server.
If either of these servers go down, they won’t affect the other and will still retain some functionality or our app.

User gulp-webserver as font-end server and node as backend-server.

## Frameworks and Modules
### Sails
A framework that sits on top of Express and Node.js
Sails makes it easy to build custom, enterprise-grade Node.js apps. It is designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails
### Gulp
Automate repetitive tasks
### Satellizer
A end-to-end, token-based authentication module for AngularJS with built-in support for Google, Facebook, Twitter etz OAuth providers
### twit
Twitter API Client for node
Supports both the REST and Streaming API.
