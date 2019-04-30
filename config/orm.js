// importing mysql connection
var connection = require("./connection.js.js.js");

// creating helper function to repeat "?" sign based on number of parameters needed to construct the sql query
function printQuestionMarks(num) {
    var arr=[];
    for(var i=0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

// creating helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // looping through the keys and push the key/value as string arr
    for (var key in ob){
        var value = ob[key];

        // checking to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === 'string' && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString()
}

// creating objects for all our SQL statement functions
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " +table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;
