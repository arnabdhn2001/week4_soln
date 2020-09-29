(function(window){
var hellospeaker = {};
var speakword = "Hello";
hellospeaker.sayhello =function speak(name) {
	console.log(speakword + " " + name);
}
window.hellospeaker=hellospeaker;
})(window);