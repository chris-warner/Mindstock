const express= require ('express');

const port = process.env.PORT || 8080;
const app = express();

const db = require("./models")

let path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('public'));
app.use('/node_modules', express.urlencoded({extended: true}));
app.use(express.json());

//handlebars
const exphbs = require ('express-handlebars')
app.set('views', "public/views/")
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/html-routes.js")(app);
require("./routes/investors-routes.js")(app);
require("./routes/investment-routes.js")(app);


db.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log(`Running server on port ${port}`);
    });
  });


// const express= require ('express');

// const port = process.env.PORT || 8080;
// const app = express();

// // const db = require("./models")
// const path = require('path')

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // app.use(express.static("public"));
// app.use('/static', express.static('public'))
// app.use('/node_modules', express.static(path.join(__dirname,'node_modules')));

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// //handlebars
// const exphbs = require ('express-handlebars')
// app.set('views', "public/views/")
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var handlebars = require('handlebars');

// // Routes
// require("./routes/mutual-fund-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/user-api-routes.js")(app);



// db.sequelize.sync().then(function() {
//     app.listen(port, function() {
//       console.log(`Running server on port ${port}`);
//     });
//   });