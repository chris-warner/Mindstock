$(document).ready(function () {
  let companies = "yhoo,dis";
  let url = "https://feeds.finance.yahoo.com/rss/2.0/headline?s=yhoo,dis&region=US&lang=en-US"

  var xhr = createCORSRequest("GET", "https://api.rss2json.com/v1/api.json?rss_url=" + url);
  if (!xhr) {
    throw new Error('CORS not supported');
  } else {
    xhr.send();
    console.log(xhr);
  }
    xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var responseText   = xhr.responseText;
    }
    return responseText;
}

function setText(){
  let $("news") = xhr.onreadystatechange
for (var i =0; i < xhr.onreadystatechange.length; i++){
  console.log()
}
};

    });