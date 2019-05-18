$(document).ready(function () {
    console.log('newsticker.js ran');
    const apikey = 'b9c6fbd474d04caa8fa8da391d95b607';
    let newsUrl = 'https://newsapi.org/v2/everything?q=finance&apiKey=' + apikey;
    let newsArray = [];

    $.get(newsUrl, function (data) {
        let results = data.articles;

        for (var i = 0; i < results.length; i++) {
            var articleTitle = results[i].title
            var articleUrl = results[i].url

            $('.articleLister').append(
                `<span style='color:red; font-size: 2em; margin-right:1.25em; display:inline-block;'>"<a href="${articleUrl}">${articleTitle}.</a>"</span>`
            );
        }
    });
});
