function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } 
 return text;   
}


$(document).on("mouseup", function() {
    
    var msg = new SpeechSynthesisUtterance(getSelectionText());
  speakNow(msg);
});


function speakNow(selectedText){
    
window.speechSynthesis.speak(selectedText);
}

$("#button").on("click", function(){
    
    var text = this.innerHTML.toString(text);
    var msg = new SpeechSynthesisUtterance(text);
  speakNow(msg);
   
    
});

$("a").on("mousedown", function(){
    
    var text = this.href;
    var msg = new SpeechSynthesisUtterance(text);
  speakNow(msg);
});