var file = '';          // filename 
var fullname = '';      // fullname
var surveyAnswers = []; // container for use input
var currentSurvey = 0;  // keep track of current survey question

// survey question and choices        
var survey = [{
    question: "In general, how would your best friend describe you as a risk taker?",
    answers: [
        'Avoid risk at all costs',
        'Cautious',
        'Willing to take risks after completing adequate research',
        'A real gambler'
    ]
},{
    question: "You are on a TV game show and can choose one of the following, which would you take?",
    answers: [
        '$1,000 in cash',
        'A 50% chance at winning $5,000',
        'A 25% chance at winning $10,000',
        'A 5% chance at winning $100,000'
    ]
},{
    question: "You have just finished saving for a once-in-a-lifetime vacation. Three weeks before you plan and leave, you lose your job. You would:",
    answers: [
        'Cancel the vacation',
        'Take a much more modest vacation',
        'Go as scheduled, because you need time to prepare for a job search',
        'Extend your vacation, because this might be your last chance to go first-class'
    ]
},{
    question: "If you unexpectedly received $20,000 to invest, what would you do?",
    answers: [
        'Deposit it into a bank account, moneymarket acount or an insured CD',
        'Invest it in a safe high-quality bonds or bond mutual funds',
        'Invest it in stocks or stock mutual funds',
    ]
},{
    question: "In terms of experience, how comfortable are you investing in stocks or stock mutual funds?",
    answers: [
        'Not at all comfortable',
        'Somewhat comfortable',
        'Very Comfortable'
    ]
},{
    question: " When you think of the word RISK which of the following words comes to mind first?",
    answers: [
        'Loss',
        'Uncertainty',
        'Opportunity',
        'Thrill',
    ]
},{
    question: "Some experts are predicting the prices of hard assets such as gold, jewels, collectibles and real estate to increase in value; bond prices may fall, however, experts tend to agree that government bonds are relatively safe. Most of your investment assets are now in high-interest government bonds. What would you do?",
    answers: [
        'Hold the bonds',
        'Sell the bonds, put half of the proceeds into money market accounts and the other half into hard assets',
        'Sell the bonds and put the total proceeds into hard assets',
        'Sell the bonds, put total proceeds into hard assets and borrow additional money to buy more'
    ]
},{
    question: "Given the best- and worst-case returns of the four investment choices below, which would you prefer?",
    answers: [
        '$200 gain best case; $0 gain or loss worst case',
        '$800 gain best case; $200 loss worst case',
        '$2,600 gain best case; $800 loss worst case',
        '$4,800 gain best case; $2,400 loss worst case'
    ]
},{
    question: "You have been given $1,000 to invest. You are now asked to choose between:",
    answers: [
        'A sure gain of $500',
        'A 50% chance to lose $1,000 and a 50% chance to gain $1,000',
    ]
},{
    question: "You have been given $2,000 to invest. You are now asked to choose between:",
    answers: [
        'A sure gain of $500',
        'A 50% chance to lose $1,000 and a 50% chance to gain $1,000'
    ]
},{
    question: "Suppose a relative left you an inheritance of $100,000, stipulating in the will that you invest ALL of the money in ONE of the following choices. Which one would you select?",
    answers: [
        'A savings account or money market mutual fund',
        'A mutual fund that owns stocks and bonds',
        'A portfolio of 15 common stocks',
        'Commodities like gold, silver and oil'
    ]
},{
    question: "If you had to invest $20,000, which of the following investment choices would you find most appealing?",
    answers: [
        '60% in low-risk investments, 30% in medium-risk investments, 10% in high-risk investments',
        '30% in low-risk investments, 40% in medium-risk investments, 30% in high-risk investments',
        '10% in low-risk investments, 40% in medium-risk investments, 50% in high-risk investments',
    ]
},{
    question: "Your trusted friend and neighbor, an experienced geologist, is putting together a group of investors to fund an exploratory gold mining venture. The venture could pay back 50 to 100 times the investment if successful. If the mine is a bust, the entire investment is worthless. Your friend estimates the chance of success is only 20%. If you had the money, how much would you invest?",
    answers: [
        'Nothing',
        'One months salary',
        'Three months salary',
        'Six months salary'
    ]
},{
    question: "How many years before you expect to make withdrawals from this account?",
    answers: [
        '3 years or less',
        '4-7 years',
        '8 years or more'
    ]
}];

    
    // iterate over the survey questions and anwers and generate HTML
    for(var i = 0; i < survey.length; i++){
        var currentCount = i+1;
        var currentQuestion = `<span>Question ${currentCount}</span>: ${survey[i].question}`;
        var choices = survey[i].answers;
        var choicesHtml = "";
        for(var j = 0; j < choices.length; j++){
            currentChoice = j + 1;
            choicesHtml += `<label class="input-group">
                    <span class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" name="q${currentCount}" aria-label="${choices[j]}" value="${currentChoice}">
                        </div>
                    </span>
                    <span class="input-label">${choices[j]}</span>
                </label>`;
        }

        var surveyQuestion = `<div class="surveys card mb-4">
            <div class="card-header">
            <strong><i class="fas fa-poll-h"></i> &nbsp; ${currentQuestion}</strong>
            </div>
            <div class="card-body">
                ${choicesHtml}
            </div>
        </div>`;

        $("#survey").append(surveyQuestion);

        $("input[name=q"+currentCount+"]").bind("click",function(){

            var currentAnswerValue = $(this).val();
            console.log(`${$(this).attr('name')} answer is ${currentAnswerValue}`);
            surveyAnswers.push(currentAnswerValue);
            //console.log(surveyAnswers);
            currentSurvey++;
            showNextQuestion(currentSurvey);

        });

    }
    
        // First register any plugins
        $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
        $.fn.filepond.registerPlugin(FilePondPluginFileEncode);
        $.fn.filepond.registerPlugin(FilePondPluginFileValidateSize);

        $.fn.filepond.setDefaults({
        maxFileSize: '3MB'
        });
    
        // Turn input element into a pond
        $('.filepond').filepond();

        $('.filepond').filepond('allowFileEncode',true);
    
        // Set allowMultiple property to true
        $('.filepond').filepond('allowMultiple', false);
    
        // Listen for addfile event
        $('.filepond').on('FilePond:addfile', function(e) {
            console.log('file added event', e);
            $('input').blur();
            //console.log(e.detail.file.getFileEncodeDataURL());
            file = e.detail.file.getFileEncodeDataURL();
            checkContinue();
            
        });
        /*
        // Manually add a file using the addfile method
        $('.filepond').first().filepond('addFile', 'index.html').then(function(file){
        console.log('file added', file);
        });
        */

        $(".fullName").on("change",function(){
        fullname = $(this).val();
        if(fullname.length > 2){
            $(this).removeClass("has-error");
            checkContinue();
        } else {
            $(this).addClass("has-error");
        }
        
        })

        function checkContinue(){
            
            if(file || fullname){
            $(".continueSurvey").removeClass("disabled").addClass("ready");
            } else {
            $(".continueSurvey").removeClass("ready").addClass("disabled");
            }
        }

        $(".continueSurvey").on("click",function(){
        if($(this).hasClass('ready')){
            $("#status").fadeIn();
            updateStatusBar(currentSurvey,$(".surveys").length);
            $(".surveys").eq(0).addClass("show");
            var ht =  $(".surveys:visible").height();
            $("#survey").css("height",ht+"px");
            $(".aboutMe").addClass("filled");
        }
        return false;
        });

        function updateStatusBar(current,total){
        var currentNum = parseInt(current);
        var totalNum = parseInt(total);
        if(totalNum == currentNum){
            $(".status-text").html(`Click 'Find a Match' below to get results!`);
            $("#survey").slideUp();
            $(".status-bar").fadeOut();
            $(".completeSurvey").removeClass("disabled").addClass("ready");
            

        } else {
            $(".status-text").html(`${currentNum+1} of ${totalNum}`);
        }
        
        var percent = (currentNum/totalNum).toFixed(2)*100+"%";
        $(".bar").css("width",percent);
        console.log(`setting bar to ${percent}`);
        }

        function showNextQuestion(number){
        updateStatusBar(currentSurvey,$(".surveys").length);
        $(".surveys:visible").eq(currentSurvey-1).removeClass("show").addClass("filled");
        $(".surveys").eq(currentSurvey).addClass("show");
        }

        var submitted = false;

        $(".completeSurvey").on("click",function(){
            var scores = surveyAnswers;
            var photo = file;
            var name = fullname;
            var userData = { name, photo, scores };

            if(submitted == false){
            // AJAX post the data to the friends API.
                $.post("/api/friends", userData, function(data) {

                    submitted = true;
                    console.log(data);
                    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                    $("#match-name").text(data.name);
                    $("#match-img").css({"background": "url("+data.photo+") center center no-repeat","background-size":"cover"});
                    $(".search").html(`<a class="button ready" target="_blank" href="https://www.google.com/search?tbm=isch&q=${data.name}">Google your new friend!</a>`)

                    // Show the modal with the best match
                    $("#results-modal").modal("toggle");

                });

            } else {

                $("#results-modal").modal("toggle");

            }

            return false;

        });