/* Element names and calls */
var mainContent = document.querySelector('#content');
var questions = document.querySelector('#questions');
var title = document.querySelector('#codequiz');
var answers = document.querySelector('#answers');
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#time');
var rightWrong = document.querySelector('#feedback');
var timeLeft = 60;

/* Functions for correct/incorrect answer 'Feedback' */
var feedbackC = function () {
    rightWrong.textContent = "Correct!"
};
var feedbackI = function () {
    rightWrong.textContent = "Incorrect!"
};


document.getElementById('start').onclick = function () {
    /* Timer start when game starts function */
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval)
            // CLOSE GAME AND GO TO ENTER SCORE
            title.textContent = "Your Score is " + timeLeft + "! Enter Your Initials"
            rightWrong.textContent = ''
            answers.innerHTML = "<input id='score' class'score-form'/>" + 
                                "<button class='choice' onClick='window.location.reload();'>Enter</button>";
        }
    }, 1000);

    /* Questions structured so user cannot continue until correct answer is selected */
    questions.textContent = '';
    title.textContent = "Commonly used data types do NOT include:"
    answers.innerHTML = "<button id='incorrect1' class='choice-1'>Strings</button>" + 
                        "<br>" + 
                        "<button id='incorrect1' class='choice-1'>Booleans</button>" + 
                        "<br>" + 
                        "<button id='correct1' class='choice'>Alerts</button>" + 
                        "<br>" + 
                        "<button id='incorrect1' class='choice-1'>Numbers</button>" + 
                        "<br>";

    var correctA1 = document.querySelector('#correct1');
    var incorrectA = document.querySelector('.answers');

    incorrectA.addEventListener("click", function (event) {
        if (event.target.className === "choice-1") {
            console.log('feedback')
            timeLeft -= 10;
            feedbackI();
        }

    });

    document.getElementById('correct1').onclick = function () {
        feedbackC();
        title.textContent = "The condition in an if/else statement is enclosed with:"
        answers.innerHTML = "<button id='incorrect2' class='choice-1'>Quotes</button>" + 
                            "<br>" + 
                            "<button id='incorrect2' class='choice-1'>Curly Brackets</button>" + 
                            "<br>" + 
                            "<button id='correct2' class='choice'>Parentheses</button>" + 
                            "<br>" + 
                            "<button id='incorrect2' class='choice-1'>Square Brackets</button>" + 
                            "<br>";

        var correctA = document.querySelector('#correct2');
        console.log(correctA);

        document.getElementById('correct2').onclick = function () {
            feedbackC();
            title.textContent = "Arrays in JavaScript can be used to store:"
            answers.innerHTML = "<button id='incorrect3' class='choice-1'>Numbers and Strings</button>" + 
                                "<br>" + 
                                "<button id='incorrect3' class='choice-1'>Other Arrays</button>" + 
                                "<br>" + 
                                "<button id='incorrect3' class='choice-1'>Booleans</button>" + 
                                "<br>" + 
                                "<button id='correct3' class='choice'>All of the Above</button>" + 
                                "<br>";

            var correctA = document.querySelector('#correct3');
            console.log(correctA);

            document.getElementById('correct3').onclick = function () {
                feedbackC();
                title.textContent = "String values must be enclosed in ______ when being assigned to variables."
                answers.innerHTML = "<button id='correct4' class='choice'>Quotes</button>" + 
                                    "<br>" + 
                                    "<button id='incorrect4' class='choice-1'>Curly Brackets</button>" + 
                                    "<br>" + 
                                    "<button id='incorrect4' class='choice-1'>Commas</button>" + 
                                    "<br>" + 
                                    "<button id='incorrect4' class='choice-1'>Parentheses</button>" + 
                                    "<br>";

                var correctA = document.querySelector('#correct4');
                console.log(correctA);

                document.getElementById('correct4').onclick = function () {
                    feedbackC();
                    title.textContent = "A useful tool used during development and debugging for printing content to the debugger is:"
                    answers.innerHTML = "<button id='incorrect5' class='choice-1'>JavaScript</button>" + 
                                        "<br>" + 
                                        "<button id='correct5' class='choice'>Console.log</button>" + 
                                        "<br>" + 
                                        "<button id='incorrect5' class='choice-1'>Terminal/Bash</button>" + 
                                        "<br>" + "<button id='incorrect5' class='choice-1'>For Loops</button>" + 
                                        "<br>";

                    var correctA5 = document.querySelector('#correct5');
                    var incorrectA = document.querySelector('.choice-1');
                    console.log(correctA);

                    correctA5.addEventListener("click", function () {
                        //clearInterval(timeInterval)
                        // CLOSE GAME AND GO TO ENTER SCORE
                        title.textContent = "Your Score is " + timeLeft + "! Enter Your Initials"
                        rightWrong.textContent = ''
                        clearInterval(timeInterval)
                        answers.innerHTML = "<input id='initials' class'score-form'/>" + 
                                            "<button id='enter-score' class='choice'>Enter</button>";

                        /* localStorage for High Scores */
                        document.getElementById('enter-score').onclick = function () {
                            var initials = document.querySelector('#initials').value;
                            console.log(initials);
                            var tempObject = { initials, timeLeft }
                            var highScores = JSON.parse(localStorage.getItem("High-Score")) || []
                            highScores.push(tempObject);
                            localStorage.setItem('High-Score', JSON.stringify(highScores))

                            window.location.reload();
                        };
                    });
                };
            };
        };
    };
};