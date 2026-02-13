// Quiz data
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hight Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which is NOT a javascript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Color Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Which method is used to add and element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "What is the correct way to declare a JavaScript variable?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
        correct: 0
    }
];

// TODO: Select DOM elements
// We'll do this tomorrow!
const questionEl = document.getElementById('question');
const optionsEls = [
    document.getElementById('label0'),
    document.getElementById('label1'),
    document.getElementById('label2'),
    document.getElementById('label3'),
];

const submitBtn = document.getElementById('submit');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalScoreEl = document.getElementById('totalScore');
const resultMessageEl = document.getElementById('resultMessage');
const restartBtn = document.getElementById('restart');
const progressBar = document.getElementById('progress');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');

// TODO: Track quiz state
// currentQuestion, score, etc.
let currentQuestionIndex = 0;
let score = 0;

// ===== INITIALIZE QUIZ =====

const init = () => {
    currentQuestionIndex = 0;
    score = 0;

    // Show quiz, hide results
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');

    // Update total questions
    totalQuestionsEl.textContent = quizData.length;

    // Load first question
    loadQuestion();
}

// Start quiz
init();

// TODO: Load question function

// TODO: Check answer function

// TODO: Show result function

// TODO: Restart quiz function

console.log('Quiz app loaded!');
console.log('Quiz data:', quizData);
