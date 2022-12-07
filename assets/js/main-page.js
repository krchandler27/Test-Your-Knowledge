var startBtn = document.querySelector("#start-btn");
var timeEl = document.querySelector("#time");
var timeLeft = 60;
var questionIndex = 0;
var questionContainer = document.querySelector("#question-container");
var feedback = document.querySelector("#feedback")

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
    {
        question: "______________ is considered the bones of coding.",
        choices: ["Hypertext Markup Language", "Cascading Style Sheets", "JavaScript", "Python"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "______________ is considered the skin of coding.",
        choices: ["Hypertext Markup Language", "Cascading Style Sheets", "JavaScript", "Python"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Given the line of code: 'var questionContainer = document.querySelector('.alphabet');' what class is being selected and by what variable?(Respectively)",
        choices: ["querySelector, questionContainer", "alphabet, questionContainer", "alphabet, document.querySelector", "document, .querySelector"],
        answer: "alphabet, questionContainer"
    },
    {
        question: "Given the line of code: 'document.querySelector('.intro-section').classList.add('hide');' what is the most accurate and detailed description of what is being executed?",
        choices: ["You tell me", "The class hide is being added to an element in the html document with the class of 'intro-section'", "The class list is going to hide something in the document", "Phone a friend"],
        answer: "The class hide is being added to an element in the html document with the class of 'intro-section'"
    },
    {
        question: "What is the best name for this type of code 'for (var i = 0; i < currentQ.choices.length; i++)'?",
        choices: ["for loop", "i-testing", "inter-looping", "elemental concurrency"],
        answer: "for loop"
    },
    {
        question: "What do alerts do in JavaScript?",
        choices: ["They alert the user of something and then the user gets to type in their answer.", "They help to tie-together code is there are any bugs.", "None of the above.", "They loop the code if something is found to be wrong."],
        answer: "None of the above."
    },
]

function startGame() {

    Timer();

    document.querySelector(".intro-section").classList.add("hide");
    document.querySelector(".hdr-can-you-code").classList.remove("hide");
    document.querySelector(".timeRemaining").classList.remove("hide");
    document.querySelector(".seconds").classList.remove("hide");
    document.querySelector(".feedbackSentence").classList.remove("hide");

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

1
function questionClick(event) {
    var clickedButton = event.target.textContent;
 
    if (clickedButton !== questions[questionIndex].answer) {
        timeLeft = timeLeft - 5;
        feedback.textContent = "incorrect! You lost 5 seconds of time.";
    }
    if (clickedButton == questions[questionIndex].answer) {
        timeLeft = timeLeft + 2;
    feedback.textContent = "correct! You gained 2 seconds of time!";
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
