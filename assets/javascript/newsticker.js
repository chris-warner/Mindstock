//News Ticker Module :) 
$(document).ready(function () {
  let companies = "yhoo,dis";
  let url = "https://feeds.finance.yahoo.com/rss/2.0/headline?s=yhoo,dis&region=US&lang=en-US"

  var xhr = createCORSRequest("GET", "https://api.rss2json.com/v1/api.json?rss_url=" + url);
  if (!xhr) {
    throw new Error('CORS not supported');
  } else {
    xhr.send();
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var responseText = xhr.responseText;
      var result = JSON.parse(responseText);
      console.log(result);
    }
  }

  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }

  function addCompany(company) {
    companies.append(addCompany);
    alert(company + " added to news ticker!")
  }

});s