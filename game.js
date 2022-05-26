
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function() {
  let userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

checkAnswer(userClickedPattern);

function nextSequence() {
  level++;
  $("#level-title").text("Level" + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel) {
  if (gamePattern == userClickedPattern){
    console.log("success");
    console.log("wrong");
  };
}
