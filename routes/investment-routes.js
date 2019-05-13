var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
    app.get("/api/investments", function(req, res) {
        db.Investments.findAll().then(result => res.json(result));
    });

};
