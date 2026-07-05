const Questions = [
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: 2
    },
    {
        question: "Which method is used to select an element by its ID?",
        options: [
            "querySelectorAll()",
            "getElementById()",
            "getElementsByClassName()",
            "getElement()"
        ],
        answer: 1
    },
    {
        question: "What does the typeof operator return for an array?",
        options: ["array", "object", "list", "undefined"],
        answer: 1
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: 2
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do...while", "forEach"],
        answer: 2
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: 1
    },
    {
        question: "Which method is used to attach a click event to an element?",
        options: [
            "addEvent()",
            "addEventListener()",
            "attachEvent()",
            "onClickListener()"
        ],
        answer: 1
    },
    {
        question: "What is the output of Boolean(0)?",
        options: ["true", "false", "undefined", "0"],
        answer: 1
    },
    {
        question: "Which array method creates a new array by applying a function to every element?",
        options: ["filter()", "forEach()", "map()", "reduce()"],
        answer: 2
    },
    {
        question: "Which operator checks both value and data type in JavaScript?",
        options: ["==", "=", "===", "!="],
        answer: 2
    }
];

const startScreen = document.getElementById("startScreen")
const quizScreen = document.getElementById("quizScreen")
const resultScreen = document.getElementById("resultScreen")

const startBtn = document.getElementById("startBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const restartBtn = document.getElementById("restartBtn")

const questionNumber = document.getElementById("questionNumber")
const timer = document.getElementById("timer")
const question = document.getElementById("question")
const options = document.getElementById("options")
const progress = document.getElementById("progress")

const score = document.getElementById("score")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const unanswered = document.getElementById("unanswered")
const percentage = document.getElementById("percentage")
const review = document.getElementById("review")

let userAnswers = [];
let currentQuestion = 0;
let interval;
let timeLeft = 30;
const totalQuestions = Questions.length;

startBtn.addEventListener("click", () => {
    startScreen.classList.remove("active")
    quizScreen.classList.add("active")

    showQuestion();
})

const showQuestion = () => {
    clearInterval(interval);
    timeLeft = 30;

    startTimer();
    showOption();
}

const startTimer = () => {
    timer.innerText = `${timeLeft}`
    interval = setInterval(() => {
        timeLeft--;
        timer.innerText = `${timeLeft}`

        if (timeLeft < 0) {
            clearInterval(interval);
            nextQuestion();
        }
    }, 1000)
}

const nextQuestion = () => {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        progressUpdate();
        showQuestion();
    } else {
        showResult();
    }
}

const progressUpdate = () => {
    const percent = ((currentQuestion + 1) / totalQuestions) * 100;
    progress.style.width = percent + '%';
}

const showOption = () => {
    const q = Questions[currentQuestion];
    questionNumber.innerText = `${currentQuestion + 1} / ${Questions.length}`
    question.innerText = `${q.question}`

    options.innerHTML = "";
    q.options.map((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        if (userAnswers[currentQuestion] === index) {
            btn.classList.add("is-correct")
        }
        btn.onclick = () => selectAnswer(index)
        options.appendChild(btn)
    })
}

const selectAnswer = (index) => {
    userAnswers[currentQuestion] = index;
    showOption();
}

nextBtn.addEventListener("click", nextQuestion)

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
})

const showResult = () => {
    clearInterval(interval);
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    review.innerHTML = "";
    Questions.map((question, index) => {
        if (userAnswers[index] === undefined) {
            unansweredCount++;
        } else if (userAnswers[index] === question.answer) {
            correctCount++;
        } else {
            wrongCount++;
        }

        review.innerHTML += `
        <div class="review-item">
            <p class="review-question">Question ${index + 1}: ${question.question}</p>
            <p class="review-answer">Your Answer: 
                <span class="${userAnswers[index] === question.answer ? "is-correct" : "is-wrong"}">
                    ${userAnswers[index] === undefined ? "Not Answered" : question.options[userAnswers[index]]}
                </span>
            </p>
            <p class="review-answer">
                Correct Option: ${question.options[question.answer]}
            </p>
        </div>
        `
    })

    score.innerText = `${correctCount} / ${Questions.length}`
    correct.innerText = `${correctCount}`
    wrong.innerText = `${wrongCount}`
    unanswered.innerText = `${unansweredCount}`
    percentage.innerText = `${correctCount / Questions.length * 100}%`

}

restartBtn.addEventListener("click", () => {
    userAnswers = [];
    currentQuestion = 0;
    startScreen.classList.add("active")
    resultScreen.classList.remove("active")
})