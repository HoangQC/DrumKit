/*
var num_of_button = document.querySelectorAll(".drum").length;
for (i=0;i<num_of_button;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    playSound(this.innerHTML);
    button_animation(this.innerHTML);
  });
}
*/
//replace by jQuery
$(".drum").click(function() {
//$(".drum").on("click", function() {
 var k = this.innerHTML;
  playSound(k);
  button_animation(k);
});

/*
document.addEventListener("keypress", function(event) {
  playSound(event.key);
  button_animation(event.key);
});
*/
//replace by JQuery
$(document).keypress(function(e) {
//$(document).on("keypress",function(e) {
  var k = e.key;
  playSound(k);
  button_animation(k);
});

function button_animation(key){
  /*
  var a = document.querySelector(".drum."+key);
  a.classList.add("pressed");
  setTimeout(function(){
    a.classList.remove("pressed");
  }, 300);
  */
  //replace by jQuery
  var a = $(".drum."+key);
  a.addClass("pressed");
  setTimeout(function(){
    a.removeClass("pressed");
  }, 300);

}

function playSound(key){
  switch (key) {
    case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
    case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    default:
  }
}
