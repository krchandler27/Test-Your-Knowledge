var startBtn = document.querySelector("#start-btn");
var timeEl = document.querySelector("#time");
var timeLeft = 60;
var questionIndex = 0;
var questionContainer = document.querySelector("#question-container");

var questions = [
    {
        question: "______________ is considered the muscles of coding.",
        choices: ["Hypertext Markup Language", "Cascading Style Sheets", "JavaScript", "All of the above"],
        answer: "JavaScript"
    },

    {

        question: "What is it called when you run into an error and then you work to fix the problem(s) in the code?",
        choices: ["Hebugging", "Shebugging", "Rebugging", "Debugging"],
        answer: "Debugging"
    },



]

startBtn.addEventListener("click", startGame);

function startGame() {

    Timer();

    document.querySelector(".intro-section").classList.add("hide");
    document.querySelector(".hdr-can-you-code").classList.remove("hide");
    document.querySelector(".next-btn").classList.remove("hide");

createQuestion();

}

function createQuestion() {
    var currentQ = questions[questionIndex];
    var questionHeader = document.createElement("h2");
    questionHeader.setAttribute("class", "questionHeader");
    questionHeader.textContent = currentQ.question;
    questionContainer.appendChild(questionHeader);

    for (var i = 0; i < currentQ.choices.length; i++){
        var choice = currentQ.choices[i];
        var choiceContainer = document.createElement("button");
        choiceContainer.setAttribute("class", "questions");
        choiceContainer.textContent = choice;
        questionContainer.appendChild(choiceContainer);
        }

        }

// question.Choice = question.Answer
// function questionClick(event) { 

// }




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

