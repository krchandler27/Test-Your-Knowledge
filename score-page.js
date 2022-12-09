
function printHighscores() {
    var finalScore = JSON.parse(window.localStorage.getItem("finalScore"))
    printHighscores.sort(function (a, b) {
        return b.score - a.score;
    });

    for (var i = 0; i < finalScore.length; i += 1) {
        var liTag = document.createElement("li");
        liTag.textContent = finalScore[i].initials + "-" + finalScore[i].score;
        var olEl = document.getElementById("scoreTable");
        olEl.appendChild(liTag);
    }
}