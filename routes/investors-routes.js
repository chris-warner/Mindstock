var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
    app.get("/api/investors", function(req, res) {
        db.Investor.findAll().then(result => res.json(result));
    });

    app.post("/api/investors", function(req, res) {
        console.log("heres a new client");
        db.Investor.create(req.body).then(function(obj) {
            res.json(obj);
          });
    });

    app.put("/investors/:id", function (req, res) {
      console.log('investor id ', req.params.id)
      console.log(req.body)
      db.Investor.update({ investor_type: req.body.investor_type },
        {
          where: {
            id: req.params.id
          }
        })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });



    // app.post("/api/investors/:id", function (req, res) {
    //   console.log("post method to add new investor to database");

    //   var newInvestorObj = {};
    //   if (req.body.first_name) clientObj.first_name = req.body.first_name;
    //   if (req.body.last_name) clientObj.last_name = req.body.last_name;
    //   if (req.body.email) clientObj.email = req.body.email;
  
    //   db.Client.create(new, {
    //       where: {
    //         id: id
    //       }
    //     }).then(function (dbClient) {
    //       res.json(dbClient);
    //     });
    // });


    app.delete("/api/investors/:id", function(req, res) {
        db.Client.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbinvestors) {
          res.json(dbinvestors);
        });
      });
    
}
;






