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


