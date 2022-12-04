var startBtn = document.querySelector("#start-btn");
var timeEl = document.querySelector("#time");


startBtn.addEventListener("click", startTimer);

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
        <button class="btn">${questions[0].answers[0]}</button>
        <button class="btn">${questions[0].answers[1]}</button>
        <button class="btn">${questions[0].answers[2]}</button>
        <button class="btn">${questions[0].answers[3]}</button>
    `
    
}
