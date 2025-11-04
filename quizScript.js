const guitarQuiz = [
    {

        //tele: 1 strat: 2 les paul: 3 mustang/jaguar: 3
        question: "Who is your favourite artist or band?",
        options: [
            {answer: "Jonny Greenwood (Radiohead)", score: 1},
            {answer: "David Bowie", score: 2},
            {answer: "Slash", score: 3},
            {answer: "Kurt Cobain (Nirvana)", score: 4}
        ]
    },
    {

        question: "What is your favorite genre?",
        options: [
            {answer: "country, blues or alt rock", score: 1},
            {answer: "60s/70s rock, ambient or funk", score: 2},
            {answer: "rock, metal", score: 3},
            {answer: "grunge, rock", score: 4}
        ]

    },
    {
        question: "Are you very set in the kind of music you like, or do you like to play different genres?",
        options: [
            {answer: "I want to play a bit of everything, but not much hard rock or metal", score: 1},
            {answer: "I want to play a bit of everything", score: 2},
            {answer: "I don't play much else than rock and metal", score: 3},
            {answer: "I want to play mainly rock music and few ambient/clean sounds", score: 4}
        ]
    }
];

const quizContainer = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextElement = document.getElementById("next");

let thisQuestion = 0;
let score = 0;

function showQuestions() {
    const a = guitarQuiz[thisQuestion];
    quizContainer.innerHTML = `<div class="question">${a.question}</div>`;
    optionsElement.innerHTML = a.options.map(option => 
        `<button class="option">${option.answer}</button>`
    ).join('');
}

 
function nextQuestion() {
    thisQuestion++;
    if (thisQuestion < guitarQuiz.length) {
        showQuestions();
    } else {
        // Logic to handle the end of the quiz can be added here
        quizContainer.innerHTML = `<div class="question">Thank you for taking this quiz! Your score is: ${score}</div>`;
        optionsElement.innerHTML = '';
    }
}


nextElement.addEventListener('click', nextQuestion);


showQuestions();



if (thisQuestion < guitarQuiz.length){
    showQuestions();
}





