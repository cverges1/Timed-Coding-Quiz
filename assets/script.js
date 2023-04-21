var header = document.querySelector(".cycle");
var startBtn = document.querySelector(".start-game");
var timerElement = document.querySelector(".timer");
var line1 = document.querySelector(".card").querySelector("#line-one");
var line2 = document.querySelector(".card").querySelector("#line-two");
var line3 = document.querySelector(".card").querySelector("#line-three");
var winCount = document.querySelector("#wins-counter")
var lossCount = document.querySelector("#loss-counter")
var hide = document.querySelector("#hide");
hide.style.display = "none";
var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var answerA = document.querySelector("#hide").querySelector("#A");
var answerB = document.querySelector("#hide").querySelector("#B");
var answerC = document.querySelector("#hide").querySelector("#C");
var answerD = document.querySelector("#hide").querySelector("#D");

var questionIndex;
var questionList = [
    {   
        questionText: "What does DOM stand for?",
        A: "Document Object Matrix",
        B: "Data Oriented Matrix",
        C: "Document Object Model",
        D: "Data Object Model",
        E: "Document Object Model",
    },
    {
        questionText: "What does API stand for?",
        A: "Application Processing Interface",
        B: "Antiquated Programming Interface",
        C: "Automated Program Integration",
        D: "Application Programming Interface",
        E: "Application Programming Interface",
    },
    {
        questionText: "A special variable that can hold more than one value",
        A: "Array",
        B: "Element",
        C: "String",
        D: "Modulus",
        E: "Array",
    },
    {
        questionText: "A block of code in JavaScript designed to perform a specific task",
        A: "Variables",
        B: "Function",
        C: "Object",
        D: "textContent",
        E: "Function",
    },
    {
        questionText: "A type of variable that is true or false",
        A: "Truthy",
        B: "Boolean",
        C: "Object",
        D: "String",
        E: "Boolean",
    },
    {
        questionText: "What method would you use to set a timer?",
        A: "setInterval()",
        B: "clearInterval()",
        C: "setTimer()",
        D: "clearTimer()",
        E: "setInterval()",
    },
];

var wins = 0;
winCount.textContent = wins
var loss = 0;
lossCount.textContent = loss


var textArr = ["JavaScript", "Coding", "Game"];
var timer;
var timerCount = 60;

function changeText() {

    var titleTimerCount = 4;
    titleTimer = setInterval(function () {
        titleTimerCount--;
        if (titleTimerCount === 3) {
            header.textContent = textArr[0];
        }
        if (titleTimerCount === 2) {
            header.textContent = textArr[1];
        }
        if (titleTimerCount === 1) {
            header.textContent = textArr[2];
        }
        if (titleTimerCount === 0) {
            clearInterval(titleTimerCount);
            changeText();
        }
    }, 700);
}

changeText();

function startGame() {
    startBtn.disabled = true;
    startTimer();
    displayQuestion();
};

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
    
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000)
};

function displayQuestion(){
    hide.style.display = "block";

    for(questionIndex = 0; questionIndex<questionList.length; questionIndex++){

        question.textContent = questionList[questionIndex].questionText
        
        answerA.textContent = questionList[questionIndex].A
        answerA = questionList[questionIndex].A
       
        answerB.textContent = questionList[questionIndex].B
        answerB = questionList[questionIndex].B
        
        answerC.textContent = questionList[questionIndex].C
        answerC = questionList[questionIndex].C
        
        answerD.textContent = questionList[questionIndex].D
        answerD = questionList[questionIndex].D
        
        answer.textContent = questionList[questionIndex].E


    }
    
};


// if user answers correct, moves to next question, background of answer box changes green and ✅ next to it. Add highscore
function youWon() {
    line1.textContent = "YOU WON!! ADD YOUR NAME TO THE LEADERBOARD"
    winCount = winCount + 1;
    startBtn.disabled = false;
    wins = wins + 1;
};
// if user gets question wrong, subtract 10 seconds from running time, change bg color red and ❌
function youLost() {
    line1.textContent = "YOU LOST. TRY AGAIN!"
    startBtn.disabled = false;
    loss = loss + 1;
};
// record score to local storage

startBtn.addEventListener("click", startGame);
answerA.addEventListener("click", function (event){
    if (answerA === questionList[questionIndex].E){
        answerA.textContent = "Correct ✅"
    } else {
        answerA.textContent = "Incorrect ❌"
        questionCounter++
        timerCount - 10
    }
});
answerB.addEventListener("click", function (event){
    if (answerB === questionList[questionIndex].E){
        answerB.textContent = "Correct ✅"
    } else {
        answerB.textContent = "Incorrect ❌"
        questionCounter++
        timerCount - 10

    }});

answerC.addEventListener("click", function (event){   
    if (answerC === questionList[questionIndex].E){
    answerC.textContent = "Correct ✅"
} else {
    answerC.textContent = "Incorrect ❌"
    questionCounter++
    timerCount - 10

}});

answerD.addEventListener("click", function(event){
    if (answerD === questionList[questionIndex].E){
        answerD.textContent = "Correct ✅"
    } else {
        answerD.textContent = "Incorrect ❌"
        questionCounter++
        timerCount - 10
    }
});