$(document).ready(function () {
    console.log("newsticker.js ran");
    const apikey = "b9c6fbd474d04caa8fa8da391d95b607";
    let newsUrl = "https://newsapi.org/v2/everything?q=finance&apiKey=" + apikey;
    let newsArray = [];


    
    $.get(newsUrl, function (data) {

        console.log(data.articles);

        let results = data.articles;

        for (var i=0; i < results.length; i++) {
            var articleTitle = results[i].title;
            var articleUrl = results[i].url;

            $(".articleLister").append(
                `<span style='color:red; font-size: 2em; margin-right:1.25em; display:inline-block;'>"<a href="${articleUrl}">${articleTitle}.</a>"</span>`
                );

        }

    //     for (i in data) {
    //         for (var article in data[i]) {
    //             var newsArticle = new NewsArticle (
    //                 data[i][article].author,
    //                 data[i][article].description,
    //                 data[i][article].title,
    //                 data[i][article].publishedAt,
    //                 data[i][article].url
                    
                    
    //             );
    //             newsArray.push(newsArticle);
    //         }
            
    //     }
        

        
    //     console.log(newsArray);
    //     console.log(newsArticle);
    // });



})
})