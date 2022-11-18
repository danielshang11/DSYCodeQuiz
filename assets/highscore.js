function saveHighscore() {
 
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
      var highscores =
        JSON.parse(window.localStorage.getItem("total-score")) || [];
  
      var newScore = {
        score: count,
        initials: initials,
      };
  
      highscores.push(newScore);
      window.localStorage.setItem("total-score", JSON.stringify(highscores));
  
      window.location.href = "./assets/highscore.html";
    }
  }
  
  function checkForEnter(event) {
    if (event.key === "Enter") {
      saveHighscore();
    }
  }
  var submitBtn = document.getElementById("submit");
  if (submitBtn != null) {
    submitBtn.addEventListener("click",saveHighscore);
  }
  
  
  
var initialsEl = document.getElementById("initials");
  if(initialsEl != null){
    initialsEl.onkeyup = checkForEnter;
  }
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("total-score")) || [];
  
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < highscores.length; i += 1) {
      var liTag = document.createElement("li");
      liTag.textContent = highscores[i].initials + " - " + highscores[i].score;
      var olEl = document.getElementById("total-score");
      if (olEl != null) {
        olEl.appendChild(liTag);
      }
    }
  }
  var clearBtn = document.getElementById("clear");
  if (clearBtn != null) {
    clearBtn.addEventListener("click", clearHighscores);
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("total-score");
    window.location.reload();
  }
  
  printHighscores();