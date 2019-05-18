var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {

    app.get("/api/investments", function (req, res) {
        db.Investments.findAll().then(function (result) {
            res.json(result)
        });

        app.get("/api/investors", function (req, res) {
            console.log();
            db.Investments.findAll().then(function (result) {
                res.json(result);
            });
        });
    });
}
