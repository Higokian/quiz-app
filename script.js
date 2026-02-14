// Quiz data
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hight Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which is NOT a javascript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    correct: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Color Style Sheets",
    ],
    correct: 1,
  },
  {
    question: "Which method is used to add and element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
    correct: 0,
  },
];

// TODO: Select DOM elements
// We'll do this tomorrow!
const questionEl = document.getElementById("question");
const optionsEls = [
  document.getElementById("label0"),
  document.getElementById("label1"),
  document.getElementById("label2"),
  document.getElementById("label3"),
];

const submitBtn = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreEl = document.getElementById("score");
const totalScoreEl = document.getElementById("totalScore");
const resultMessageEl = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restart");
const progressBar = document.getElementById("progress");
const currentQuestionEl = document.getElementById("currentQuestion");
const totalQuestionsEl = document.getElementById("totalQuestions");

// TODO: Track quiz state
// currentQuestion, score, etc.
let currentQuestionIndex = 0;
let score = 0;

// ===== INITIALIZE QUIZ =====

const init = () => {
  currentQuestionIndex = 0;
  score = 0;

  // Show quiz, hide results
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");

  // Update total questions
  totalQuestionsEl.textContent = quizData.length;

  // Load first question
  loadQuestion();
};

// TODO: Load question function

const loadQuestion = () => {
  console.log(currentQuestionIndex);
  // Get current question data
  const currentQuestion = quizData[currentQuestionIndex];

  // Update question text
  questionEl.textContent = currentQuestion.question;

  // Update options
  currentQuestion.options.forEach((option, index) => {
    optionsEls[index].textContent = option;
  });

  // Update progress
  currentQuestionEl.textContent = currentQuestionIndex + 1;
  const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  // Clear any previous selections
  const radioButtons = document.querySelectorAll('input[name="answer"]');
  radioButtons.forEach((radio) => {
    radio.checked = false;
    // Remove any feedback classes
    radio.nextElementSibling.classList.remove("correct", "incorrect");
  });

  // Enable submit button
  submitBtn.disabled = false;
  submitBtn.textContent = 'Submit Answer';
};

// TODO: Check answer function

const getSelectedAnswer = () => {
    // Get all radio buttons
    const radioButtons = document.querySelectorAll('input[name="answer"]');

    // Find which one is checked
    let selectedAnswer = null;

    radioButtons.forEach((radio, index) => {
        if (radio.checked) {
            selectedAnswer = index;
        }
    });

    return selectedAnswer;
}

// ===== CHECK ANSWER =====

const checkAnswer = () => {
    const selectedAnswer = getSelectedAnswer();

    // Make sure an answer was selected
    if (selectedAnswer == null) {
        alert('Please select an answer!');
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;

    // Get all labels
    const labels = document.querySelectorAll('.options label');

    // Check if answer is correct
    if (selectedAnswer === correctAnswer) {
        score++;
        labels[selectedAnswer].classList.add('correct');
    } else {
        labels[selectedAnswer].classList.add('incorrect');
        labels[correctAnswer].classList.add('correct');
    }

    // Disable submit button temporarily
    submitBtn.disabled = true;

    // Move to next question after 1.5 seconds
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
};

// TODO: Show result function

// ===== SHOW RESULTS =====
const showResults = () => {
    // Hide quiz, show results
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    // Update score
    scoreEl.textContent = score;
    totalScoreEl.textContent = quizData.length;

    // Calculate percentage
    const percentage = (score / quizData.length) * 100;

    // Show message based on score
    let message = '';

    if (percentage === 100) {
        message = '🎉 Perfect score! You\'re a JavaScript master!';
    } else if (percentage >= 80) {
        message = '👏 Great job! You know your stuff!';
    } else if (percentage >= 60) {
        message = '👍 Good effort! Keep learning!';
    } else if (percentage >= 40) {
        message = '📚 Not bad, but there\'s room for improvement!';
    } else {
        message = '💪 Keep practicing! You\'ll get there!';
    }
    
    resultMessageEl.textContent = message;
}

// ===== EVENT LISTENERS =====

// Submit answer
submitBtn.addEventListener('click', checkAnswer);

// Restart quiz
restartBtn.addEventListener('click', init);

// Allow enter key to submit
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
})

// TODO: Restart quiz function

// Start quiz
init();
console.log("Quiz app loaded!");
console.log("Quiz data:", quizData);
