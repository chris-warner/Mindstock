$(document).ready(function () {

    function getGrowthType() {
 
        $.get("/api/investments/", function(data){
            console.log("what is this", data);
        })
 
 
    }
    getGrowthType();
 });