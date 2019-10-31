function highlightLinks(){
    $("a").toggleClass("highlight");
}

function changeCursor() {
    $("body").toggleClass("body2");
    $("button").toggleClass("body2");
}

$('p').keyup(function (e) {
    console.log('h1 keyup called');
    var code = e.keyCode || e.which;
    if (code == '9') {

        var msg = new SpeechSynthesisUtterance('Paragraph ' + $(':focus').text());
        window.speechSynthesis.speak(msg);
    }
});

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

$(document).mouseup(function () {
    setTimeout(function () {
        var msg = new SpeechSynthesisUtterance(getSelectionText());
        window.speechSynthesis.speak(msg);
    }, 1);
});



$("button").on("click", function () {
    var id = $(this).attr('id'); // $(this) refers to button that was clicked
    console.log(id);
    $("#"+id).toggleClass("buttonpress");
    var text = this.innerHTML.toString(text);
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);


});




function myFunction() {
    $("h1,#button,p,body,a").toggleClass("highcontrast")
}



$('a').mouseenter(function () { // Attach this function to all mouseenter events for 'a' tags 
    window.speechSynthesis.cancel(); // Cancel anything else that may currently be speaking
    var text = this.innerHTML.toString(text);
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg); // Speak the text contents of all nodes within the current 'a' tag
});



$('a').keyup(function (e) {
    console.log('a keyup called');
    var code = e.keyCode || e.which;
    if (code == '9') {
        window.speechSynthesis.cancel();
        var msg = new SpeechSynthesisUtterance('Link 2 ' + $(':focus').text());
        window.speechSynthesis.speak(msg);
    }
});

$('button').keyup(function (e) {
    console.log('button keyup called');
    var code = e.keyCode || e.which;
    if (code == '9') {
        window.speechSynthesis.cancel();
        msg = new SpeechSynthesisUtterance($(':focus').text() + ' button');
        window.speechSynthesis.speak(msg);
    }
});

$('textarea').keyup(function (e) {
    console.log('text keyup called');
    var code = e.keyCode || e.which;
    if (code == '9') {

        window.speechSynthesis.cancel();
        var msg = new SpeechSynthesisUtterance('Text Input ' + $(':focus').attr('placeholder'));
        window.speechSynthesis.speak(msg);
    }
});
