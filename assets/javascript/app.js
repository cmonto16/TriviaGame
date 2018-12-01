// Create variables that hold references to the places in the HTML where we want to display things.
var correctElement = $("#correct");
var wrongElement = $("#wrong");
var unansweredElement = $("#unanswered");
var timeElement = $("#display");
var afterTimer = $("#after-timer");
var quiz = $("#quiz");
var start = $("#start");

//variable to hold the number correct, wrong and unanswered
var correct = 0;
var wrong = 0;
var unanswered = 0;
var time = 60;
var clockInterval = null;

function getTotals() {
    //variable to hold questions
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;


    console.log(question1);
    if (question1 === "Adora") {
        correct++;
    } else if (question1 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question2 === "Mirror2") {
        correct++;
    } else if (question2 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question3 === "Thief") {
        correct++;
    } else if (question3 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question4 === "Left") {
        correct++;
    } else if (question4 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question5 === "Diablo") {
        correct++;
    } else if (question5 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question6 === "Arrow") {
        correct++;
    } else if (question6 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question7 === "Left") {
        correct++;
    } else if (question7 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question8 === "12") {
        correct++;
    } else if (question8 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question9 === "Bread") {
        correct++;
    } else if (question9 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    if (question10 === "Umbrella") {
        correct++;
    } else if (question10 === "") {
        unanswered++;
    } else {
        wrong++;
    }

    console.log(correct);
    console.log(wrong);
    console.log(unanswered);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function endGame() {
    clearInterval(clockInterval);
    afterTimer.show();
    quiz.hide();

    getTotals();
    correctElement.html(correct);
    wrongElement.html(wrong);
    unansweredElement.html(unanswered);
}

function onTimer() {
    time--;
    if (time < 0) {
        // game is over
        endGame();
        return;
    }

    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    timeElement.html("Time Remaining: " + converted);
}

function startTimer() {
    if (!clockInterval) {
        clockInterval = setInterval(onTimer, 1000);
        clockRunning = true;
    }
}

start.click(function () {
    start.hide();
    startTimer();
    quiz.show();
});


