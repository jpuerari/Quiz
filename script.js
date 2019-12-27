//step 1: create an alert

alert("welcome!");

//step 2: create variables to reference all DOM elements we're working with

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


  //step 3: list your functions and loops

  // start game button

  // start-screen element

  // quiz-content

  // post-game-screen
  // user-score
  // play-again-btn


// create variables for game logic
  // timerIntervalId
  // score
  // secondsLeft


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





  // var title = document.createElement("h3");
  // //<h3></h3>
  //  //title.textContent = "The Valencian Community is located along the Mediterranean Sea"
  // title.textContent = questions[1].question;
  // console.log(title)
  // quizContent.appendChild(title)




  // var title = document.createElement("h3");
  // //<h3></h3>
  // //title.textContent = Is Spain a Constitutional Monarchy?
  // title.textContent = questions[2].question;
  // console.log(title)
  // quizContent.appendChild(title)



  // var title = document.createElement("h3");
  // //<h3></h3>
  // //title.textContent = Within the Valencian Community, which language is spoken along with Spanish?
  // title.textContent = questions[3].question;
  // console.log(title)
  // quizContent.appendChild(title)




  // get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)

}

// create function to handle users answering
  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subtract time from secondsLeft
  
  // get index of next question (this question's index + 1)
  // run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score



// add event listeners
  // start game button (for starting the game)
  // quizcontent (for answering a question) -> use event delegation
  // play again button (for starting the game)

startBtn.addEventListener("click", startGame)