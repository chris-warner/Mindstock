console.log('results.js ran')
$(document).ready(function () {
    $.ajax({
        url: 'api/investors/' + id,
        method: 'GET',
        data: { investor_type: investorType }
    }).then(function (responce) {
        console.log('response ', response)
    });
        ;})
