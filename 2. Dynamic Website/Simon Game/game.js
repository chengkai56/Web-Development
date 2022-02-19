var gamePattern = [];
var userClickedPattern = [];
const buttonColor = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).on("keydown", function() {
  if (!started) {
    $("#level-title").text("Level " + level)
    nextSequence();
    started = true;
  }
})


$(".btn").click(function(event) {

  var userChosenColor = $(this).attr('id'); //event.target.id
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor)

  checkAnswer(userClickedPattern.length - 1)

})


function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play()
}


function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000)

    }

  } else {

    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    level = 0;
    gamePattern = [];
    started = false;
  }

}
