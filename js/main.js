// Shows if the video is playing, or paused on the webpage
var textToChange = document.getElementById("status_of_video");
var futurama_Video = document.getElementById("Futurama_Video");

/**
  pauseButton() functionality is going to be used in order
  to pause the current video after the timer has started
  to play the video
*/

var pauseBTN = document.getElementById("pauseButton");

pauseBTN.addEventListener("click", function() {
    var pausePHPRequest = new XMLHttpRequest();

    pausePHPRequest.open('POST', 'pause.php');
    pausePHPRequest.onload = function() {
        // Can Do Anything Now...
        textToChange.innerHTML = "PAUSED...";
        futurama_Video.pause();
    }
    pausePHPRequest.send();
});

/**
  playButton() functionality is going to be used in order
  to play the current video after pauseButton()
*/

var playBTN = document.getElementById("playButton");

playBTN.addEventListener("click", function() {
    var playPHPRequest = new XMLHttpRequest();

    playPHPRequest.open('POST', 'play.php');
    playPHPRequest.onload = function() {
        // Can Do Anything Now...
        textToChange.innerHTML = "PLAYING...";
        futurama_Video.play();
    }
    playPHPRequest.send();
});
