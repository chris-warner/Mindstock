$(".save-client").click(function(){
    console.log("SAVE CLICKED!");
    var fname = $(`#firstName`).val(); 
    var lname = $(`#lastName`).val();
    var email = $(`#eMail`).val();
    console.log(fname+lname+email);
    var newInvestor = {
        first_name: fname,
        last_name: lname,
        email: email
    }
    addNewInvestor(newInvestor);
})

function addNewInvestor(newInvestor) {
    $.ajax({
        method: "POST",
        url: `/api/investors`,
        data: newInvestor
    }).then(location.reload());
    console.log("AJAX: POSTED THAT SHIT > INVESTOR ADDED")
}


function addNewInvestor(newInvestor) {
    $.ajax({
                method: "POST",
                url: `/api/investors`,
                data: newInvestor
            }).then(function(response) {
                // console.log('response: ', response)
                localStorage.setItem('userId', JSON.stringify(response))
                // location.reload()
            });
            console.log("AJAX: POSTED THAT SHIT > INVESTOR ADDED")
}
