var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");

startBtn.addEventListener("click", startTimer);

function startTimer() {
    document.querySelector(".intro-section").classList.add("hide");
    document.querySelector(".questions-section").classList.remove("hide");

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

