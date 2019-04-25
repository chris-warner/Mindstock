//SERVER: Project 2
// The requirements for Project #2 are as follows:
// Must use a Node and Express Web Server
// Must be backed by a MySQL Database with a Sequelize ORM
// Must have both GET and POST routes for retrieving and adding new data
// Must be deployed using Heroku (with Data)
// Must utilize at least one new library, package, or technology that we haven’t discussed
// Must have a polished frontend / UI
// Must have folder structure that meets MVC Paradigm
// Must meet good quality coding standards (indentation, scoping, naming)
// Must not expose sensitive API key information on the server, see

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var path = require("path");
var app = express();

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = exprss();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes")(app);
app.get("hello world");

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
}); 