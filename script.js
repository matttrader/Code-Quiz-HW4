var startBtn = document.querySelector(".startBtn");
var startScreen = document.getElementById("startScreen")
var quizScreen = document.querySelector("#quizscreen")
var Q = 0;

var choiceA = document.getElementById("a")
var choiceB = document.getElementById("b")
var choiceC = document.getElementById("c")


var questions = [
    {
        question: "What is JavaScript?",
        choices: {
            a: 'A new font',
            b: 'A flavor of coffee',
            c: 'A computer programming language'
        },
        answer: 'c'

    }, 
    

    {
        question: "Who uses JavaScript?",
        choices: {
            a: 'Painters',
            b: 'Computer Developers',
            c: 'Super Heroes'
        },
        answer: 'b'
    }, 


    {
        question: "What device is needed to write code in JavaScript?",
        choices: {
            a: 'Computer',
            b: 'Toaster',
            c: 'Television'
        },
        answer: 'a'

    }, 
   
    ]
console.log(questions);

startBtn.addEventListener("click", function () {
    startScreen.setAttribute("class", "hide")
    quizScreen.removeAttribute("class", "hide")
    buildCard()

    setAnswers()

})

function buildCard() {
    var currentQuestion = questions[Q].question;
    var questionEl = document.getElementById("question")

    questionEl.textContent = currentQuestion;

    }

function setAnswers() {

    choiceA.textContent = questions[Q].choices["a"]
    choiceB.textContent = questions[Q].choices["b"]
    choiceC.textContent = questions[Q].choices["c"]

}

choiceA.addEventListener("click", function() {
    if (questions[Q].answer==="a"){
        alert("correct")
        
    }
    else{alert("wrong answer")
        //timer would go here
    }

Q++

    buildCard()

    setAnswers()



})

choiceB.addEventListener("click", function() {
    if (questions[Q].answer==="b"){
        alert("correct")

    }
    else{alert("wrong answer")
    // timer would go here
    }

Q++

    buildCard()

    setAnswers()



})

choiceC.addEventListener("click", function() {
    if (questions[Q].answer==="c"){
        alert("correct")

    }
    else{alert("wrong answer")
    //timer would go here
    }


Q++

    buildCard()

    setAnswers()



})