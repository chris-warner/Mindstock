// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set( "view engine","handlebars" );

// Routes
app.get( "/news",function ( req,res )
{
  res.render( "news",{ footerContent: '<script src="js/jquery-3.2.1.min.js"></script> <script src="js/owl.carousel.min.js"> </script>	<script src="js/main.js"></script>' })
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});


app.get( '/',function ( req,res )
{    
  res.render("index",{body:"<center><button>HandlebarsTest</button></center>"});
});
  
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


