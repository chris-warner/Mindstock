var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/survey", function (req, res) {
        res.render("survey");
    });
    app.get("/learn", function(req, res){
        res.render("learn");
    });

    app.get("/results", function (req, res) {
        var investorType = "Small-Capital";
        res.render("results", { product: investorType });
      /*   db.Investments.findAll({
            where: {
                growth_rate : Investor.investorType
            }
        }).then(function (response) {
            res.render("results", {product: response});
        }); */

    })
}