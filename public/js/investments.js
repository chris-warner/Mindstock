$(document).ready(function () {

    function getGrowthType() {
        
        $.get("/api/investments/:id", function (data) {
            console.log(data);
        });
  
    }
    getGrowthType();
 });