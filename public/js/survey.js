var file = ''; // filename 
var fullname = ''; // fullname
var surveyAnswers = []; // container for use input
var currentSurvey = 0; // keep track of current survey question

$(document).ready(function () {
    console.log("scripts. js ran****************************************");

    var survey = [{
        question: "In general, how would your best friend describe you as a risk taker?",
        answers: [
            'Avoid risk at all costs',
            'Cautious',
            'Willing to take risks after completing adequate research',
            'A real gambler'
        ]
    }, {
        question: "You are on a TV game show and can choose one of the following, which would you take?",
        answers: [
            '$1,000 in cash',
            'A 50% chance at winning $5,000',
            'A 25% chance at winning $10,000',
            'A 5% chance at winning $100,000'
        ]
    }, {
        question: "You have just finished saving for a once-in-a-lifetime vacation. Three weeks before you plan and leave, you lose your job. You would:",
        answers: [
            'Cancel the vacation',
            'Take a much more modest vacation',
            'Go as scheduled, because you need time to prepare for a job search',
            'Extend your vacation, because this might be your last chance to go first-class'
        ]
    }, {
        question: "If you unexpectedly received $20,000 to invest, what would you do?",
        answers: [
            'Deposit it into a bank account, moneymarket acount or an insured CD',
            'Invest it in a safe high-quality bonds or bond mutual funds',
            'Invest it in stocks or stock mutual funds',
        ]
    }, {
        question: "In terms of experience, how comfortable are you investing in stocks or stock mutual funds?",
        answers: [
            'Not at all comfortable',
            'Somewhat comfortable',
            'Very Comfortable'
        ]
    }, {
        question: " When you think of the word RISK which of the following words comes to mind first?",
        answers: [
            'Loss',
            'Uncertainty',
            'Opportunity',
            'Thrill',
        ]
    }, {
        question: "Some experts are predicting the prices of hard assets such as gold, jewels, collectibles and real estate to increase in value; bond prices may fall, however, experts tend to agree that government bonds are relatively safe. Most of your investment assets are now in high-interest government bonds. What would you do?",
        answers: [
            'Hold the bonds',
            'Sell the bonds, put half of the proceeds into money market accounts and the other half into hard assets',
            'Sell the bonds and put the total proceeds into hard assets',
            'Sell the bonds, put total proceeds into hard assets and borrow additional money to buy more'
        ]
    }, {
        question: "Given the best- and worst-case returns of the four investment choices below, which would you prefer?",
        answers: [
            '$200 gain best case; $0 gain or loss worst case',
            '$800 gain best case; $200 loss worst case',
            '$2,600 gain best case; $800 loss worst case',
            '$4,800 gain best case; $2,400 loss worst case'
        ]
    }, {
        question: "You have been given $1,000 to invest. You are now asked to choose between:",
        answers: [
            'A sure gain of $500',
            'A 50% chance to lose $1,000 and a 50% chance to gain $1,000',
        ]
    }, {
        question: "You have been given $2,000 to invest. You are now asked to choose between:",
        answers: [
            'A sure gain of $500',
            'A 50% chance to lose $1,000 and a 50% chance to gain $1,000'
        ]
    }, {
        question: "Suppose a relative left you an inheritance of $100,000, stipulating in the will that you invest ALL of the money in ONE of the following choices. Which one would you select?",
        answers: [
            'A savings account or money market mutual fund',
            'A mutual fund that owns stocks and bonds',
            'A portfolio of 15 common stocks',
            'Commodities like gold, silver and oil'
        ]
    }, {
        question: "If you had to invest $20,000, which of the following investment choices would you find most appealing?",
        answers: [
            '60% in low-risk investments, 30% in medium-risk investments, 10% in high-risk investments',
            '30% in low-risk investments, 40% in medium-risk investments, 30% in high-risk investments',
            '10% in low-risk investments, 40% in medium-risk investments, 50% in high-risk investments',
        ]
    }, {
        question: "Your trusted friend and neighbor, an experienced geologist, is putting together a group of investors to fund an exploratory gold mining venture. The venture could pay back 50 to 100 times the investment if successful. If the mine is a bust, the entire investment is worthless. Your friend estimates the chance of success is only 20%. If you had the money, how much would you invest?",
        answers: [
            'Nothing',
            'One months salary',
            'Three months salary',
            'Six months salary'
        ]
    }, {
        question: "How many years before you expect to make withdrawals from this account?",
        answers: [
            '3 years or less',
            '4-7 years',
            '8 years or more'
        ]
    }];


    // iterate over the survey questions and anwers and generate HTML
    for (var i = 0; i < survey.length; i++) {
        var currentCount = i + 1;
        var currentQuestion = `<span>Question ${currentCount}</span>: ${survey[i].question}`;
        var choices = survey[i].answers;
        var choicesHtml = "";
        for (var j = 0; j < choices.length; j++) {
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

        $("input[name=q" + currentCount + "]").bind("click", function () {

            var currentAnswerValue = parseInt($(this).val());
            console.log(`${$(this).attr('name')} answer is ${currentAnswerValue}`);
            surveyAnswers.push(currentAnswerValue);

            //console.log(surveyAnswers);
            currentSurvey++;
            showNextQuestion(currentSurvey);

        });

    }

    $("#status").fadeIn();
    updateStatusBar(currentSurvey, $(".surveys").length);
    $(".surveys").eq(0).addClass("show");
    var ht = $(".surveys:visible").height();
    $("#survey").css("height", ht + "px");


    function updateStatusBar(current, total) {
        var currentNum = parseInt(current);
        var totalNum = parseInt(total);
        if (totalNum == currentNum) {
            $("#survey").slideUp();
            $(".status-bar").fadeOut();
            $(".completeSurvey").removeClass("disabled").addClass("ready");


        } else {
            $(".status-text").html(`${currentNum + 1} of ${totalNum}`);
        }

        var percent = (currentNum / totalNum).toFixed(2) * 100 + "%";
        $(".bar").css("width", percent);
        console.log(`setting bar to ${percent}`);
    }

    function showNextQuestion(number) {
        updateStatusBar(currentSurvey, $(".surveys").length);
        $(".surveys:visible").eq(currentSurvey - 1).removeClass("show").addClass("filled");
        $(".surveys").eq(currentSurvey).addClass("show");
    }


    $(".completeSurvey").on("click", function () {
        console.log("SAVE CLICKED!");
        const id = JSON.parse(localStorage.getItem('userId')).id;
        console.log("Json get item user id survey.js : " + id);
        alert("survey.js submit survey function line 195: id =" + id + " that shoould be investor id ");
        let scores = surveyAnswers;
        var sumOfAnswers = 0;
        var investorType = '';
        for (var i = 0; i < scores.length; i++) {
            sumOfAnswers += scores[i]
        }
        if (sumOfAnswers >= 14 && sumOfAnswers <= 25) { //1 If large Capital then 
            investorType = "Large Capital"
            alert("Your investment type is Large capital");
        }
        else if (sumOfAnswers >= 26 && sumOfAnswers <= 37) { //2 
            investorType = "Mid Capital"
        }
        else if (sumOfAnswers >= 28 && sumOfAnswers <= 48) { //3 
            investorType = "Small Capital"
        } else {
            console.log("err")
        }
        console.log(sumOfAnswers);

        $.ajax({
            url: 'api/investors/' + id,
            method: 'PUT',
            data: { investor_type: investorType }
        }).then(response => console.log('response ', response));

        console.log("SAVE CLICKED!");
        var fname = $(`#firstName`).val();
        var lname = $(`#lastName`).val();
        var email = $(`#eMail`).val();
        console.log(fname + lname + email);
        var newInvestor = {
            first_name: fname,
            last_name: lname,
            email: email
        }
        addNewInvestor(newInvestor);

    $(".save-client").click(function () {
        console.log("SAVE CLICKED!");
        var fname = $(`#firstName`).val();
        var lname = $(`#lastName`).val();
        var email = $(`#eMail`).val();
        console.log(fname + lname + email);
        var newInvestor = {
            first_name: fname,
            last_name: lname,
            email: email
        }
        addNewInvestor(newInvestor);
    });


        function addNewInvestor(newInvestor) {
            console.log('/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *')
            console.log("Survey.js line 239: function addNewInvestorCalled(newInvestor) " + "newInvestor param being passed is " + newInvestor);

               $.ajax({
                method: "POST",
                url: `/api/investors`,
                data: newInvestor
            }).then(function (response) {
                // console.log('response: ', response)
                localStorage.setItem('userId', JSON.stringify(response))
                // location.reload()
            });
            console.log("Survey.js line 248: function addNewInvestorCalled: result ");
        }
    });
}); 
