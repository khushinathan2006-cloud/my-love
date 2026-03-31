// Quiz Questions - All About Your Love
const quizQuestions = [
    {
        question: "When did our love story begin? (Month & Year)",
        options: [
            "I need to check my memories 😊",
            "It's our special date that I cherish",
            "Every day with you feels like the beginning",
            "It was love at first sight!"
        ],
        correctAnswer: 1
    },
    {
        question: "What is my favorite thing about you?",
        options: [
            "Your smile that melts my heart",
            "Your kindness and compassion",
            "The way you love me unconditionally",
            "Everything about you makes me fall deeper"
        ],
        correctAnswer: 3
    },
    {
        question: "How do I feel when I'm with you?",
        options: [
            "Calm and safe in your arms",
            "Like I'm home, no matter where we are",
            "Complete and whole like never before",
            "All of the above - you mean everything to me"
        ],
        correctAnswer: 3
    },
    {
        question: "What do I love most about our relationship?",
        options: [
            "The way you understand me without words",
            "How you support my dreams",
            "The way we can just sit together in comfortable silence",
            "Every single moment with you, near or far"
        ],
        correctAnswer: 3
    },
    {
        question: "When I think of our future together, I feel...",
        options: [
            "Excited and hopeful",
            "Blessed and grateful",
            "Deeply in love and committed",
            "Like I've found my forever person"
        ],
        correctAnswer: 3
    },
    {
        question: "What makes my heart skip a beat?",
        options: [
            "Your genuine laugh",
            "The way you hold my hand",
            "Your unexpected kisses and hugs",
            "Everything you do, because it's you"
        ],
        correctAnswer: 3
    },
    {
        question: "How would I describe my love for you?",
        options: [
            "Deep and endless like the ocean",
            "Bright and warm like the sun",
            "Strong and eternal like the mountains",
            "Infinite and forever growing stronger"
        ],
        correctAnswer: 3
    },
    {
        question: "What is my greatest wish for us?",
        options: [
            "To build beautiful memories together",
            "To grow old together hand in hand",
            "To face every challenge as one",
            "To love you more and more each passing day"
        ],
        correctAnswer: 3
    },
    {
        question: "When you look into my eyes, you should see...",
        options: [
            "My admiration for you",
            "My respect and trust",
            "My unconditional love",
            "My entire world reflected in them"
        ],
        correctAnswer: 3
    },
    {
        question: "My love for you is...",
        options: [
            "Pure and true",
            "Constant and unwavering",
            "Limitless and eternal",
            "Beyond any words I could ever say"
        ],
        correctAnswer: 3
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

function startQuiz() {
    selectedAnswers = new Array(quizQuestions.length).fill(null);
    currentQuestion = 0;
    score = 0;
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('active');
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        
        if (selectedAnswers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgressBar();
    updateButtons();
}

function selectOption(index) {
    selectedAnswers[currentQuestion] = index;
    displayQuestion();
}

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        calculateScore();
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuestion === quizQuestions.length - 1 ? 'Submit ✓' : 'Next →';
}

function calculateScore() {
    score = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correctAnswer) {
            score++;
        }
    });
}

function showResults() {
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');
    
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    
    let resultMessage = '';
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage === 100) {
        resultMessage = "🌟 Perfect! You know my heart completely! Every answer shows just how deeply you understand my love for you. You are truly my soulmate! 💕";
    } else if (percentage >= 80) {
        resultMessage = "💖 Amazing! You understand my heart so well! Most of your answers reflect the deep love I have for you. You mean the world to me!";
    } else if (percentage >= 60) {
        resultMessage = "💗 Wonderful! You know a lot about how I feel! My love for you grows stronger every single day. Let me show you more...";
    } else {
        resultMessage = "💝 That's okay, my love! What matters is that we're learning and growing together. My love for you is constant and forever!";
    }
    
    document.getElementById('resultMessage').innerHTML = resultMessage;
}

function goToLoveLetter() {
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('loveLetterScreen').classList.add('active');
    generateLoveLetter();
}

function generateLoveLetter() {
    const loveLetter = `
        <p>My Dearest Love,</p>

        <p>I wanted to write this letter to tell you what my heart feels every single day. Words can never truly capture the depth of my love for you, but I'm trying to express even a fraction of it here.</p>

        <p>From the moment you came into my life, everything changed. The world became more colorful, warmer, and filled with endless possibilities. You are the reason I smile when I wake up and the last thought before I sleep. You are my first and my last.</p>

        <p>I love the way you make me feel - safe, cherished, and completely understood. You don't just hear my words; you listen to my heart. You see me for who I really am, and somehow, you love me even more because of it. That kind of love is rare and precious, and I thank the universe every single day for bringing you to me.</p>

        <p>Your kindness inspires me to be a better person. Your strength gives me courage. Your laughter is my favorite song, and your smile is my most beautiful view. When you hold my hand, I feel like I can conquer any challenge. When you hug me, I feel like I'm home, no matter where we are.</p>

        <p>I want you to know that my love for you is not just about the big moments. It's in the little things - the way you look at me, the way you think of me, the way you stand by me. It's in the quiet moments we share and the dreams we dream together. It's infinite and eternal.</p>

        <p>I promise to love you with all my heart, through every season of life. I promise to stand by you, support your dreams, and face every challenge together. I promise to be your biggest cheerleader, your safe haven, and your forever love.</p>

        <p>Thank you for being you. Thank you for loving me the way you do. Thank you for making my life a beautiful love story.</p>

        <p>You are my greatest blessing, my deepest love, and my forever home.</p>
    `;
    
    document.getElementById('letterContent').innerHTML = loveLetter;
    
    const surpriseMessage = `
        <p>🎁 Special Surprise for You 🎁</p>
        <p>"Every moment with you is a moment I treasure. I love you more today than yesterday, and I'll love you even more tomorrow. You are my present and my future. Forever yours." ❤️</p>
    `;
    
    document.getElementById('surpriseMessage').innerHTML = surpriseMessage;
}
