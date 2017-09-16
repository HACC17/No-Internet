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
var qNum = 0; //question number
var questions = ["May I please have your name?","What role are you looking to volunteer for?"];

function botText(input) {
  var userText = document.createElement("div");
  userText.className = "bot";
  var text = document.createElement("p");
  text.className = "chatMessage"
  text.innerHTML = "<b>Daizzy: </b>"+ input;
  userText.appendChild(text);
  $('#chatLog')[0].appendChild(userText);
  $(userText).hide().delay(800).fadeIn(400); //fades user's input in
}

function addText() {//adds text from the textbox to the chatbox
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

  if (qNum === 0) {
    let userInput = $('#input')[0].value.toLowerCase()
    if(userInput.includes("yea") || userInput.includes("yes") || userInput.includes("yeah") || userInput.includes("sure")) {//check if user responds with yes
      botText("May I please have your name?");
      qNum = 1;
    }else{
      botText('Sorry I didn\'t quite get that, try answering again with the keywords, "Yes" or "Sure".');
    }
  }else if(qNum === 1) {
    name = $('#input')[0].value;
    var listRoles = "";
    /*for (var i = 0; i < roles.length; i++) {
      listRoles += "<br> -"+ roles[i].toLowerCase();
    }*/
    //use map instead

    //ADD conditional in here to check if their name is right
    if(name.includes('') && $('#input')[0].innerHTML !== ""){ //checks if name was inputted
      console.log("yes");
      botText("Is " + name + " the correct name?");
      if(userInput.includes("yea") || userInput.includes("yes") || userInput.includes("yeah")){
        roles.map((currVal, index) => listRoles += "<br> -" + roles[index].toLowerCase());
        botText("What role are you looking to volunteer for, "+name+"?<br><br>Current available roles:"+listRoles);
        qNum = 2;
      }else{
        botText("Please Re-enter your name");
      }
    }

  }else if(qNum === 2) {
    if ($('#input')[0].value.toLowerCase() === roles[0].toLowerCase()){
      botText("wow");
    }else if ($('#input')[0].value.toLowerCase() === roles[1].toLowerCase()){

    }else if ($('#input')[0].value.toLowerCase() === roles[2].toLowerCase()){

    }else if ($('#input')[0].value.toLowerCase() === roles[3].toLowerCase()){

    }else if ($('#input')[0].value.toLowerCase() === roles[4].toLowerCase()){

    }else if ($('#input')[0].value.toLowerCase() === roles[5].toLowerCase()){

    }else if ($('#input')[0].value.toLowerCase() === roles[6].toLowerCase()){

    }else{
      botText("That volunter role does not exist. Please try again");
    }
  }else if(qNum === 3){

  }

  $('#input')[0].value = ''; //clears textboxt after enter
  var objDiv = document.getElementById("chatLog");
  objDiv.scrollTop = objDiv.scrollHeight;
}
var name = "";
var roles = ["CONTROL CENTER OPERATOR", "COUNTING CENTER OFFICIAL", "DELIVERY/COLLECTION OFFICIAL", "ELECTION INFORMATION SERVICES OFFICIAL","FACILITY OFFICIAL","PRECINCT OFFICIAL","PRECINCT TROUBLESHOOTER"];