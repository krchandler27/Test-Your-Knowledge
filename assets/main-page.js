var startBtn = document.querySelector("#start-btn");
var timeEl = document.querySelector("#time");
var timeLeft = 60;
var questionIndex = 0;
var questionContainer = document.querySelector("#question-container");

var questions = [
    {
        question: "______________ is considered the muscles of coding.",
        choices: ["Hypertext Markup Language", "Cascading Style Sheets", "JavaScript", "Python"],
        answer: "JavaScript"
    },

    {

        question: "_______________ is when you work through errors in your code and fix them so that the app will run.",
        choices: ["Hebugging", "Shebugging", "Rebugging", "Debugging"],
        answer: "Debugging"
    },

]

function startGame() {

    Timer();

    document.querySelector(".intro-section").classList.add("hide");
    document.querySelector(".hdr-can-you-code").classList.remove("hide");
    document.querySelector(".timeRemaining").classList.remove("hide");
    document.querySelector(".seconds").classList.remove("hide");

    createQuestion();

}

function createQuestion() {
    questionContainer.innerHTML = ''
    var currentQ = questions[questionIndex];
    var questionHeader = document.createElement("h2");
    questionHeader.setAttribute("class", "questionHeader");
    questionHeader.textContent = currentQ.question;
    questionContainer.appendChild(questionHeader);

    for (var i = 0; i < currentQ.choices.length; i++) {
        var choice = currentQ.choices[i];
        var choiceContainer = document.createElement("button");
        choiceContainer.setAttribute("class", "questions");
        choiceContainer.textContent = choice;
        questionContainer.appendChild(choiceContainer);
    }



}


function questionClick(event) {
    var clickedButton = event.target.textContent;
    console.log(clickedButton);

    if (clickedButton !== questions[questionIndex].answer) {
        timeLeft = timeLeft - 5;
    }
    questionIndex++;
    createQuestion();

}

questionContainer.addEventListener("click", questionClick);

function Timer() {

    var timeInterval = setInterval(function () {

        if (timeLeft > -1) {
            timeEl.textContent = timeLeft + " seconds";
            timeLeft--;

        } else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            alert("You are out of time!");
            location.href = "score-page.html";
        }

    }, 1000);
}

startBtn.addEventListener("click", startGame);
