// Complete list of football quiz questions
// Quiz data and state
const footballQuestions = [
    { question: "Who won the FIFA World Cup in 1998?", options: ["Brazil", "France", "Germany", "Argentina"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2006?", options: ["France", "Italy", "Brazil", "Germany"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2010?", options: ["Netherlands", "Spain", "Germany", "Argentina"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2014?", options: ["Argentina", "Germany", "Brazil", "Spain"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2018?", options: ["France", "Croatia", "Germany", "Brazil"], correct: 0 },
    { question: "Who won the FIFA World Cup in 2022?", options: ["France", "Argentina", "Brazil", "Germany"], correct: 1 },
    // ... and all other questions
];

// Quiz state
let currentQuiz = [];
let userAnswers = {};

// Quiz Modal Management
function openQuiz() {
    document.getElementById('quizModal').style.display = 'block';
    generateNewQuiz();
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    userAnswers = {};
}

// Quiz Generation and Display
function generateNewQuiz() {
    // Reset results
    document.getElementById('results').style.display = 'none';
    userAnswers = {};
    
    // Select 5 random questions
    const shuffled = [...footballQuestions].sort(() => 0.5 - Math.random());
    currentQuiz = shuffled.slice(0, 8);
    
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    
    currentQuiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}: ${q.question}</h3>
            ${q.options.map((option, optionIndex) => `
                <div class="option">
                    <input type="radio" name="q${index}" value="${optionIndex}" id="q${index}_${optionIndex}">
                    <label for="q${index}_${optionIndex}">${option}</label>
                </div>
            `).join('')}
        `;
        container.appendChild(questionDiv);
    });
}

// Quiz Submission and Results
function submitQuiz() {
    // Collect answers
    userAnswers = {};
    let answeredCount = 0;
    
    for (let i = 0; i < currentQuiz.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            userAnswers[i] = parseInt(selected.value);
            answeredCount++;
        }
    }
    
    if (answeredCount < currentQuiz.length) {
        alert('Please answer all questions before submitting!');
        return;
    }
    
    displayQuizResults();
}

function displayQuizResults() {
    // Calculate score and show results
    let correctAnswers = 0;
    const resultsDiv = document.getElementById('results');
    let resultsHTML = '';
    
    for (let i = 0; i < currentQuiz.length; i++) {
        const isCorrect = userAnswers[i] === currentQuiz[i].correct;
        if (isCorrect) correctAnswers++;
        
        resultsHTML += `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>Question ${i + 1}:</strong> ${currentQuiz[i].question}<br>
                <strong>Your answer:</strong> ${currentQuiz[i].options[userAnswers[i]]}<br>
                ${!isCorrect ? `<strong>Correct answer:</strong> ${currentQuiz[i].options[currentQuiz[i].correct]}<br>` : ''}
                ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </div>
        `;
    }
    
    const percentage = (correctAnswers / currentQuiz.length) * 100;
    const { scoreClass, scoreMessage } = getScoreDetails(percentage);
    
    resultsDiv.innerHTML = `
        <div class="score ${scoreClass}">
            Your Score: ${correctAnswers}/8 (${percentage}%)<br>
            ${scoreMessage}
        </div>
        ${resultsHTML}
    `;
    
    resultsDiv.style.display = 'block';
}

function getScoreDetails(percentage) {
    let scoreClass = 'poor';
    let scoreMessage = 'Keep practicing!';
    
    if (percentage >= 80) {
        scoreClass = 'excellent';
        scoreMessage = 'Excellent! You\'re a football expert! ⚽';
    } else if (percentage >= 60) {
        scoreClass = 'good';
        scoreMessage = 'Good job! You know your football! 👏';
    } else if (percentage >= 40) {
        scoreClass = 'average';
        scoreMessage = 'Not bad, but you can do better! 💪';
    }
    
    return { scoreClass, scoreMessage };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    generateNewQuiz();

    // Handle modal close when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('quizModal');
        if (event.target === modal) {
            closeQuiz();
        }
    };
});
