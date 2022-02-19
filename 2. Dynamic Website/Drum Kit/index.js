
$(".drum").click(function(event) {
  playMain(this.innerHTML);
  buttonAnimation(this.innerHTML);

})

$(document).on("keydown", function(event) {
  playMain(event.key);
  buttonAnimation(event.key);
})

function playMain(key) {

  switch (key) {
    case "w":
      playsound('sounds/crash.mp3');
      break;
    case "a":
      playsound('sounds/kick-bass.mp3');
      break;
    case "s":
    playsound('sounds/snare.mp3');
      break;
    case "d":
    playsound('sounds/tom-1.mp3');
      break;
    case "j":
    playsound('sounds/tom-2.mp3');
      break;
    case "k":
    playsound('sounds/tom-3.mp3');
      break;
    case "l":
    playsound('sounds/tom-4.mp3');
        break;
    default:
    console.log(key);
  }

}

function playsound(url) {
  var audio = new Audio(url)
  audio.play()
}

function buttonAnimation(currentkey) {

  $("." + currentkey).addClass("pressed");
  setTimeout(function () {
    $("." + currentkey).removeClass("pressed");
  }, 100);
}

// var audio = new Audio("sounds/tom-1.mp3")
// audio.play()
