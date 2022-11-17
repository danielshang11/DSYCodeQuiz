var questions = [
  {
    question: 'which word contains letter a',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'apple',
  },
  {
    question: 'which word contains letter b',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'bed',
  },
  {
    question: 'which word contains letter o',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'cow',
  },
  {
    question: 'which word contains letter u',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'duck',
  },
  {
    question: 'which word contains letter k',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'duck',
  },
];




var timerEl = document.getElementById("timecount")
var queryEl = document.getElementById("query")
var startBtn = document.getElementById("start-btn")
var creditEl = document.getElementById("credit")
var answersEl = document.getElementById("answerselections")

var endEl = document.getElementById("qz-end")
var creditEl = document.getElementById("credit") 




document.querySelector(".start-button").addEventListener("click", function () {
  timeCount();
  quizBegin();
});

// startBtn.addEventListener('click',quizBegin)

function quizBegin(){
  var startEl = document.getElementById("qz-start")
  startEl.setAttribute("class","hide");
  queryEl.removeAttribute("class");
  timerEl.textContent = count;

  setNextQuestion();
}

var count = questions.length * 5;
var timeInterval;

function timeCount() {
  
  timeInterval = setInterval(function(){
    count--;
    if (count <= 0) {
      quizEnd();
      if(count === 0){
        clearInterval(timeInterval)
      }
    }
    timerEl.textContent = count;
  },1000);
}

var correctAnswer
var corrects = localStorage.getItem("corrects") || 0;
var incorrects = localStorage.getItem("incorrects") || 0;
var answerResult = document.querySelector(".answer-result");

// function finishGame(){
//   if(correctAnswer){
//     corrects++;
//     localStorage.setItem("corrects",corrects);
//     answerResult.textContent = "You answer it right!";
//   } else{
//     incorrects++;
//     count= count-10;
//     localStorage.setItem("incorrects",incorrects);
//     answerResult.textContent = "You answer it wrong!";
//   }
// }


var questionNowIndex = 0;

function setNextQuestion(){
  var questionNow = questions[questionNowIndex];
  var questionEl = document.getElementById("query-title");
  questionEl.textContent = questionNow.question;
  answersEl.innerHTML = " ";
  for (var i=0; i < questionNow.answers.length ; i++ ){
    var answer = questionNow.answers[i];
    var answerNode = document.createElement("button");
    answerNode.setAttribute("class", "a-button");
    answerNode.setAttribute("value", answer);

    answerNode.textContent = i + 1 + ".  "+ answer;

    answersEl.appendChild(answerNode);

  }

}

answersEl.onclick = questionAnswer;

function questionAnswer(event){
  var selectionEl = event.target
  if(!selectionEl.matches(".answer")){
    return};
  if(selectionEl.valve !== questions[questionNowIndex].correct){
    count = count -5;
    if(count < 0){ count =0;}
    timerEl.textContent = time;
    creditEl.textContent = "oh no incorrect answer!";
  } else {
    creditEl.textContent = "Yes! you got it!";
  }
  creditEl.setAttribute("class", "credit");
  setTimeout(function () {
    creditEl.style.display="none";
  }, 1000);
  questionNowIndex++;
  if (count <= 0 || questionNowIndex === questions.length) {
    quizEnd();
  } else {
    quizBegin();
  }
}

function quizEnd() {
 
  clearInterval(timeInterval);

  var endScreenEl = document.getElementById("qz-end");
  endScreenEl.removeAttribute("class");


  var finalScoreEl = document.getElementById("resultscore");
  finalScoreEl.textContent = count;

  
  queryEl.style.display = "none";
}


function saveHighscore() {
 
  var initials = initialsEl.value.trim();

  if (initials !== '') {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: count,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = 'highscores.html';
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}
var submitBtn = document.getElementById('submit');

submitBtn.onclick = saveHighscore;

var initialsEl = document.getElementById('initials');


initialsEl.onkeyup = checkForEnter;



