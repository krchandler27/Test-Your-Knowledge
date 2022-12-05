var startBtn = document.querySelector("#start-btn");
var timeEl = document.querySelector("#time");


startBtn.addEventListener("click", startTimer);

var button1 = document.getElementById("btn-1");
var button2 = document.getElementById("btn-2");
var button3 = document.getElementById("btn-3");
var button4 = document.getElementById("btn-4");

button1.addEventListener("click", );

function startTimer() {
    document.querySelector(".intro-section").classList.add("hide");
    document.querySelector(".hdr-can-you-code").classList.remove("hide");
    document.querySelector(".next-btn").classList.remove("hide");

    var timeLeft = 5;
    var timeInterval = setInterval(function () {

        if (timeLeft > -1) {
            timeEl.textContent = timeLeft + " seconds";
            timeLeft--;

        } else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            alert("You are out of time!");
            location.href = "score.html";
        }

    }, 1000);
}


var questions = [
    {
        question: "what is js?",
        answers: ["JS", "HTML", "CSS", "Java"],
        right: "JS"
    },
{
    question: 'What is considered the "muscles of coding?"'
    answers: ['JavaScript', 'H' ]
}
]
startBtn.onclick = function () {
    document.getElementById("question-container").innerHTML =
        `
    
    <div id="question">${questions[0].question}</div>
        <div id="answer-buttons" class="btn-grid"></div>
        <button class="btn" id = "btn-1">${questions[0].answers[0]}</button>
        <button class="btn" id="btn-2">${questions[0].answers[1]}</button>
        <button class="btn" id="btn-3">${questions[0].answers[2]}</button>
        <button class="btn" id="btn-4">${questions[0].answers[3]}</button>
    `

}
