function start() {
	//$('chat')[0] is equivalent to document.getElementById('chat')
	//the "[0]" is needed as jQuery returns the DOM element in an array
	$('#info')[0].style.animationPlayState = "running";

	setTimeout(() => { $('#welcomeScreen')[0].style.animationPlayState = "running";}, 550);

  setTimeout(() => { 
		$('#welcomeScreen')[0].style.display = "none";
		$('#chat')[0].style.display = "inline-block";
		$('#daizzy')[0].style.animationPlayState = "running";
	}, 1730); //makes welcome screen invisible (display: none doe snot work within keyframes)

  setTimeout(() => {$('#chatTitle')[0].style.animationPlayState = "running";}, 2200);
	setTimeout(() => {$('#chatLog')[0].style.animationPlayState = "running";}, 2700);
	setTimeout(() => {$('#input')[0].style.animationPlayState = "running";}, 3000);
  setTimeout(() => {$('#calendar')[0].style.animationPlayState = "running";}, 3000);

}

$(document).keypress(function(e) { //checks when user presses enter key
  if (e.which == 13) {
    addText();
  }
});
var qNum = 0;
var questions = ["May I please have your name?","What role are you looking to volunteer for?"];

function botText(input){
  var userText = document.createElement("div");
  userText.className = "bot";
  var text = document.createElement("p");
  text.className = "chatMessage"
  text.innerHTML = "<b>Daizzy: </b>"+ input;
  userText.appendChild(text);
  $('#chatLog')[0].appendChild(userText);
  $(userText).hide().fadeIn(400); //fades user's input in
}

function addText(){//adds text from the textbox to the chatbox
	var userText = document.createElement("div");
  userText.className = "user";
  var text = document.createElement("p");
  text.className= "chatMessage";
  text.innerHTML = "<b>You: </b>"+ $('#input')[0].value;
  
  userText.appendChild(text);
  $('#chatLog')[0].appendChild(userText);
  $(userText).hide().fadeIn(400); //fades user's input in
  
  let userDivs = $('.user');
  userDivs.map((index) => userDivs[index].style.textAlign = 'left'); //sets text to left of div
  var objDiv = document.getElementById("chatLog");
  objDiv.scrollTop = objDiv.scrollHeight;

  if (qNum ===0){
    console.log("first")
    console.log($('#input')[0].value.toLowerCase());
    if ($('#input')[0].value.toLowerCase().includes("yes")){
      console.log("worked");
      botText("May I please have your name?");
      qNum =1;
    }
  }
  else if (qNum ===1){
    name = $('#input')[0].value;
    botText("What role are you looking to volunteer for, "+name+"?");
  }
    $('#input')[0].value = ''; //clears textboxt after enter
}
var name = "";