function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } 
 return text;   
}


$(document).on("mouseup", function() {
    
    var msg = new SpeechSynthesisUtterance(getSelectionText());
  window.speechSynthesis.speak(msg);
});


//function speakNow(selectedText){
//    
//window.speechSynthesis.speak(selectedText);
//}

$("#button").on("click", function(){
    
    var text = this.innerHTML.toString(text);
    var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
   
    
});

$("a").on("mousedown", function(){
    
    var text = this.href;
    var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
});


function myFunction(){
$("h1,#button,p,body,a").toggleClass("highcontrast")
}

