$(document).ready(function ()
{
    console.log( "newsticker.js ran" );
    const apikey = "b9c6fbd474d04caa8fa8da391d95b607";
    let newsFeed = [];
    let newsUrl = "https://newsapi.org/v2/everything?q=finance&apiKey=" + apikey;
    let newsArray = [];
    var NewsText = function ( appendScrollerText )
    {
        let temp;
        let htmlOpener = "<span>";
        let htmlCloser = "</span";
        let ScrollerText = appendScrollerText;
        temp = htmlOpener + ScrollerText + htmlCloser;

        function appendText( articletext )
        {
            let htmlOpener = "<span>";
            let htmlCloser = "</span";
            let ScrollerText = articletext;
            console.log( "appText Function ran" );
            console.log( articletext );
        }

    };


    $( '.single-item-rtl' ).slick( {
        rtl: true
    } );

    var NewsArticle = function ( author1,description1,title1,publishedAt1 )
    {
        this.author = author1,
            this.description = description1,
            this.title = title1,
            this.publishedAt = publishedAt1;
        console.log(this);
        return this;
    };

   

    $.get( newsUrl,function (data)
    {
        for ( i in data )
        {
            for ( var article in data[ i ] )
            {
                var newsArticle = new NewsArticle
                    (
                    data[i][article].author,
                    data[i][article].description,
                    data[i][article].title,
                    data[i][article].publishedAt
                    );
                newsArray.push( newsArticle );
                var temp = new NewsText( newsArticle.title );
             
            }
        }
        console.log(newsArray);
    });
});