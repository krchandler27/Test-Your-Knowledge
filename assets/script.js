var startBtn = document.querySelector("#start");

function start() {
    document.querySelector(".intro-section").classList.add("hide");
    document.querySelector(".questions-section").classList.remove("hide");
}






startBtn.addEventListener("click", start)