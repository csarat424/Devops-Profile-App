document.addEventListener("DOMContentLoaded", function () {
    let score = localStorage.getItem("visitorScore") ? parseInt(localStorage.getItem("visitorScore")) : 0;
    document.getElementById("score").textContent = score;
});

function increaseScore() {
    let score = parseInt(document.getElementById("score").textContent);
    score++;
    document.getElementById("score").textContent = score;
    localStorage.setItem("visitorScore", score);
}

function resetScore() {
    document.getElementById("score").textContent = 0;
    localStorage.setItem("visitorScore", 0);
}
