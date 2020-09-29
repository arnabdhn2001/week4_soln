(function(window){
var byespeaker={};
var speakWord = "Good Bye";
byespeaker.saybye =function speak(name) {
  console.log(speakWord + " " + name);
}
window.byespeaker=byespeaker;
})(window);