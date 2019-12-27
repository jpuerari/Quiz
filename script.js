alert("welcome!");


var timeEl =document.querySelector("#time-left");
var mainEl = document.querySelector("#main");
var startBtn = document.querySelector("#start-game-btn");
var playGameBtn = document.querySelector("#play-game-button");
var startScreenDiv = document.querySelector("#start-screen");
var quizContent = document.querySelector("#quiz-content");

var secondsLeft = 10;
var score = 0;
var topScore = 0;
var timerInterval = 0;
var index = 0;


// create function to start game

// var startGame = function(){

// }

function startGame(){
  console.log("click worked")
  secondsLeft = 300;
  score = 0;
  startScreenDiv.setAttribute("class","hide")

  // time-left
  timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(timeEl)
    
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    } else {
      timeEl.textContent = secondsLeft + " time left to complete.";
    }
  }, 1000);

  displayQuestion();
}

  // set secondsLeft variable starting time (300 seconds = 5 minutes)
  // write secondsLeft to the page

  // reset score to 0
  // write score to the page (optional)

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  

  // set timerIntervalId to setInterval function that decrements secondsLeft every second

  // timerIntervalId = setInterval(function() {
  //   secondsLeft--;
  //   if (secondsLeft <= 0) {
  //     stopGame();
  //   }
  // }, 1000);

function checkAnswer(event){
  //console.log(event.target.textContent)

  while(quizContent.firstChild) {
    quizContent.removeChild(quizContent.firstChild)
  }

  var buttonClicked = event.target;
  var choice = buttonClicked.textContent;
  var correctAnswer = questions[index].answer;
  if(choice === correctAnswer){
    console.log("correct!")
  } else {
    console.log("wrong!")
    secondsLeft = secondsLeft - 15
  }
  index++;

  var numberOfQuestions = questions.length;
  if(numberOfQuestions > index){
    displayQuestion();
  } else {
    console.log("game is over")
    gameOver();
  }

  
}

function gameOver(){
  //stop the timer clearInterval
  //display score on screen
  //ask for initials 
  //put score in local storage
}

// create function to display a question and possible choices
function displayQuestion() {
  // check if questionIndex in questions array doesn't exist
  // if (!questions[questionIndex]) {
  //   // stop game, we've hit last question
  //   return stopGame();
  // }

  
  console.log(questions[index].question)
  var title = document.createElement("h3");
  //<h3></h3>
    //title.textContent = "What is the capital of Spain?""
  title.textContent = questions[index].question;

  console.log(title)
  quizContent.appendChild(title)

  var choices = questions[index].choices;

  for(var i = 0; i < choices.length; i++){
    console.log(choices[i])
    var button = document.createElement("button");
    button.textContent = choices[i];
    console.log(button);
    button.addEventListener("click", checkAnswer)
    quizContent.appendChild(button)
  }




startBtn.addEventListener("click", startGame)