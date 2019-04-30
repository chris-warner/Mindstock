// importing express & burger.js
var express = require("express");
var burger = require("../../models/burger.jsrger.js");

// setting up the router
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burger: data
        }
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, false
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: true
    }, condition, function(result) {
        if (result.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
