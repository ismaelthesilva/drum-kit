// Array to hold the sounds corresponding to each button
var sounds = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3"
  ];

// Get the number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add event listeners to each button
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // Get the index of the button that was clicked
    var buttonIndex = Array.prototype.indexOf.call(document.querySelectorAll(".drum"), this);

    // Play the corresponding sound
    var audio = new Audio(sounds[buttonIndex]);
    audio.play();

    // Set the background image of the clicked button
    this.style.backgroundImage = "url('" + images[buttonIndex] + "')";
    this.style.backgroundSize = "cover";  // Ensure the image covers the entire button
    this.style.backgroundPosition = "center";
    this.style.backgroundRepeat = "no-repeat"; // Ensure the image doesn't repeat
  });
}