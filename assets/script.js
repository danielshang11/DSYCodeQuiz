var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    answers: ['strings', 'booleans', 'alerts', 'numbers'],
    correct: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    answers: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    correct: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    answers: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    correct: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    answers: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    correct: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    correct: 'console.log',
  },
];




var timerEl = document.getElementById("timecount")
var queryEl = document.getElementById("query")
var startBtn = document.getElementById('start-btn')

var quizContainer = document.getElementById('qz-main')



startBtn.onclick = quizBegin;
var time = 40;
var timeVar;


function quizBegin(){
  var beginpageEl = document.getElementById('qz-start');
  beginpageEl.setAttribute('class','hide');
  queryEl.removeAttribute('class','hide');
  timeVar = setInterval(
    function timeCount() {
      time--;
      timerEl.textContent = time;
      if (time <= 0) {quizEnd();}
    },1000);
  timerEl.textContent = time;
  setNextQuestion();
}

var currentQuestionIndex = 0



function setNextQuestion(){
  var questionNow = questions[currentQuestionIndex];
  var titleEl = document.getElementById('query-title');
  titleEl.textContent = questionNow.title;
  queryEl.textContent = '';
  for (var i=0; i < questionNow.answers.length ; i++ ){
    var answer = questionNow.answers[i];
    var answerNode = document.createElement('button');
    answerNode.setAttribute('class', 'answer');
    answerNode.setAttribute('value', answer);

    answerNode.textContent = i + 1 + '. ' + answer;

    queryEl.appendChild(answerNode);

  }

}







