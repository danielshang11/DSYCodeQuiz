var questions = [
  {
    title: 'which word contains letter a',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'apple',
  },
  {
    title: 'which word contains letter b',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'bed',
  },
  {
    title: 'which word contains letter o',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'cow',
  },
  {
    title: 'which word contains letter u',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'duck',
  },
  {
    title: 'which word contains letter k',
    answers: ['apple', 'bed', 'cow', 'duck'],
    correct: 'duck',
  },
];




var timerEl = document.getElementById("timecount")
var queryEl = document.getElementById("query")
var startBtn = document.getElementById("start-btn")
var creditEl = document.getElementById("credit")
var answerEl = document.getElementById("answerselections")
var startEl = document.getElementById("qz-start")
var endEl = document.getElementById("qz-end")
var creditEl = document.getElementById("credit") 



startBtn.onclick = quizBegin;
var time = 40;
var timeVar;







function quizBegin(){
  
  startEl.style.display = "none";
  queryEl.style.display="block";
  endEl.style.display = "none";
  creditEl.style.display = "none";

  timeVar = setInterval(
    function timeCount() {
      time--;
      timerEl.textContent = time;
      if (time <= 0) {quizEnd();}
    },1000);
  timerEl.textContent = time;
  setNextQuestion();
}

let questionNowIndex = 0



function setNextQuestion(){
  var questionNow = questions[questionNowIndex];
  var titleEl = document.getElementById("query-title");
  titleEl.textContent = questionNow.title;
  answerEl.innerHTML = " ";
  for (var i=0; i < questionNow.answers.length ; i++ ){
    var answer = questionNow.answers[i];
    var answerNode = document.createElement(a-button);
    answerNode.setAttribute("class", "answer");
    answerNode.setAttribute("value", answer);

    answerNode.textContent = i + 1 + ".  "+ answer;

    answerEl.appendChild(answerNode);

  }

}

answerEl.onclick = questionAnswer

function questionAnswer(event){
  var choiceEl = event.target
  if(!choiceEl.matches(".answer")){return};
  if(choiceEl.valve !== questions[questionNowIndex].correct){
    time = time -5;
    if(time < 0){ time =0;}
    timerEl.textContent = time;
    creditEl.textContent = "oh no incorrect answer!";
  } else {
    creditEl.textContent = "Yes! you got it!";
  }
  creditEl.setAttribute("class", "credit");
  setTimeout(function () {
    creditEl.style.display="none";
  }, 1000);

}

questionNowIndex++;


  if (time <= 0 || questionNowIndex === questions.length) {
    quizEnd();
  } else {
    quizBegin();
  }

function quizEnd() {
 
  clearInterval(timerVar);

  var endScreenEl = document.getElementById("qz-end");
  endScreenEl.removeAttribute("class");


  var finalScoreEl = document.getElementById("resultscore");
  finalScoreEl.textContent = time;

  
  queryEl.style.display = "none";
}


function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== '') {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = 'highscores.html';
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;





initialsEl.onkeyup = checkForEnter;



