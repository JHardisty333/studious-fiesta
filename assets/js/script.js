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

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval)
            // CLOSE GAME AND GO TO ENTER SCORE
            title.textContent = "Your Score is " + timeLeft + "! Enter Your Initials"
            rightWrong.textContent = ''
            answers.innerHTML = "<input id='score' class'score-form'/>" + "<button class='choice' onClick='window.location.reload();'>Enter</button>";
        }
    }, 1000);



};