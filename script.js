const quizData = [
    {
		//quiz questions
        question: "How many playstation 5 consoles have sold?",
        a: "17.3 million",
        b: "15.7 million",
        c: "11.4 million",
        d: "20.2 million",
        correct: "d",
    },
    {
        question: "How many google searches happen every second?",
        a: "46,000",
        b: "90,000",
        c: "63,000",
        d: "54,000",
        correct: "c",
    },
    {
        question: "How many people have been to the moon?",
        a: "17",
        b: "10",
        c: "12",
        d: "14",
        correct: "c",
    },
    {
        question: "How many turkeys are eaten at christmas in the uk each year?",
        a: "11 million",
        b: "15 million",
        c: "10 million",
        d: "20 million",
        correct: "b",
    },
	{
		question: "How many legs do shrimp have?",
        a: "4 ",
        b: "6 ",
        c: "10",
        d: "16",
        correct: "c",
	},
	{
		question: "How many calories does a banana have?",
        a: "96",
        b: "89",
        c: "40",
        d: "67",
        correct: "b",
	},
];

//initializing variables for working with
//i.e.the "a" option on html is referenced by id a_text
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

//setting variables
let currentQuestion = 0
let score = 0

loadQuestion()
//gets new question
function loadQuestion() {

    deselectAnswers()
	
    const currentQuizData = quizData[currentQuestion]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
//returns any checked answers to false
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
//checks every answer element if its checked then sets the one as the selection
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

//waits for submit press
submitBtn.addEventListener('click', () => {
	//gets answer selected
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuestion].correct) {
		   //if answer is correct add to score
           score++
       }
		//next question
       currentQuestion++
		//check if last question
       if(currentQuestion < quizData.length) {
		   //get next
           loadQuestion()
       } else {
		   //end of quiz
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})