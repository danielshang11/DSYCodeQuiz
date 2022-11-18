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



if(startBtn != null){
  startBtn.addEventListener("click", function () {
    timeCount();
    quizBegin();
  });
}


function quizBegin(){
  var startEl = document.getElementById("qz-start")
  startEl.setAttribute("class","hide");
  queryEl.removeAttribute("class");
  timerEl.textContent = count;

  setNextQuestion();
}

var count = questions.length * 10;
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

    answerNode.textContent = i + 1 + ". "+ answer;

    answersEl.appendChild(answerNode);
   

  }
// console.log(questionNow)
}

if (answersEl != null){
  answersEl.addEventListener("click",questionAnswer);
}

function questionAnswer(event){
  var selectionEl = event.target.value
  if(selectionEl != questions[questionNowIndex].correct){
    count = count -5;
    if(count < 0){ count =0;}
    timerEl.textContent = count;
    creditEl.textContent = "oh no incorrect answer!";
    // console.log(creditEl);
  } else {
    creditEl.textContent = "Yes! you got it!";
    // console.log(creditEl);
  }
 
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

