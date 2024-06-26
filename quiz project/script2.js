function clickfunction(){
    window.location.href = "extra.html"; 
}



const questions = [
    {
        question: "1.   What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "2.  What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "3.   Who is Rohit Sharma?",
        answers: [
            { text: "He is Indian Cricket team Captain", correct: false },
            { text: "none of the above", correct: false },
            { text: "Right handed batsman", correct: false },
            { text: "Both a and c", correct: true }
        ]
    },
    {
        question: "4.   What is java?",
        answers: [
            { text: "Java is a programming language.", correct: false },
            { text: "java is a cricketing shot", correct: false },
            { text: "java is object oriented programming language.", correct: false },
            { text: "both a and c", correct: true }
        ]
    },
    {
        question: "5.   8-6 =",
        answers: [
            { text: "2", correct: true },
            { text: "5", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "6.   Which of the following option leads to the portability and security of Java?",
        answers: [
            { text: "Bytecode is executed by JVM", correct: true },
            { text: "The applet makes the Java code secure and portable", correct: false },
            { text: "Use of exception handling", correct: false },
            { text: "Dynamic binding between objects", correct: false }
        ]
    },
    {
        question: "7.   Which of the following is not a Java features?",
        answers: [
            { text: "Dynamic", correct: false },
            { text: "Architecture Neutral", correct: false },
            { text: "Use of pointers", correct: true },
            { text: "Object-oriented", correct: false }
        ]
    },
    {
        question: "8.    _____ is used to find and fix bugs in the Java programs.",
        answers: [
            { text: "JVM", correct: false },
            { text: "JRE", correct: false },
            { text: "JDK", correct: false },
            { text: "JDB", correct: true }
        ]
    },
    
    

];

let currentQuestionIndex = 0;
let score = 0;
let correctStreak = 0;
let wrongAnswersAllowed = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(questions[currentQuestionIndex]);
});

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    questionContainer.querySelector('#question').innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, button));
        answerButtonsElement.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(answer, button) {
    const nextButton = document.getElementById('next-btn');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const buttons = answerButtonsElement.getElementsByClassName('btn');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (answer.correct) {
        button.style.backgroundColor = 'green';
        score++;
        correctStreak++;
        if (correctStreak >= 3) {
            wrongAnswersAllowed++;
            correctStreak = 0;
        }
        nextButton.style.display = 'block';
    } else {
        button.style.backgroundColor = 'red';
        if (wrongAnswersAllowed > 0) {
            wrongAnswersAllowed--;
            nextButton.style.display = 'block';
        } else {
            setTimeout(() => {
                alert('Wrong answer. You are not eligible for quiz.' );
                window.close();
            }, 1000);
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert(`You completed the quiz! Your score is ${score} out of ${questions.length}.`);
        currentQuestionIndex = 0;
        score = 0;
        correctStreak = 0;
        wrongAnswersAllowed = 0;
        showQuestion(questions[currentQuestionIndex]);
    }
}


