var startBtn = document.querySelector(".startBtn");
var startScreen = document.getElementById("startScreen")
var quizScreen = document.querySelector("#quizscreen")
var Q = 0;



var questions = [
    {
        question: "question One",
        choices: ["1", "2", "3"],
        answer: "1"

    }, {

    }, {}, {}]

startBtn.addEventListener("click", function () {
    startScreen.setAttribute("class", "hide")
    quizScreen.removeAttribute("class", "hide")
    buildCard()
})


function buildCard() {
    var currentQuestion = questions[Q].question;
    var questionEl = document.getElementById("question")

    questionEl.textContent = currentQuestion;


}