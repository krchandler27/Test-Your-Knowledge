
var clearScores = document.querySelector("#clearScores");

function printHighScores() {
    var finalScore = JSON.parse(window.localStorage.getItem("finalScore"))
   var sortedHighScores = finalScore.sort(function (a, b) {
        return b.score - a.score;
    
    });

    for (var i = 0; i < finalScore.length; i += 1) {
        var liTag = document.createElement("li");
        liTag.textContent = finalScore[i].initials + "-" + finalScore[i].score;
        var olEl = document.getElementById("scoreTable");
        olEl.setAttribute("class", "listOfScores");
        olEl.appendChild(liTag);
    }
}

printHighScores();

function clearHighScores () {
    window.localStorage.clear();
    location.reload();
}

clearScores.addEventListener("click", clearHighScores);