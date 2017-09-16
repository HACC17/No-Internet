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
var explanations = [
"This role responds to telephone inquiries and request from polling places using a computer-based call center system. Duties include entering information, determining solutions, and resolving problems. Stipend: $85",
"This role processes, tabulates, and disseminates election results in an accurate and timely manner. Consist of nine (9) teams. Stipend: $85-95",
"This role delivers ballots and election supplies to the polling places on election morning. Collects voted ballots and election supplies after the polls have closed on election day. Each team consist of two members. Stipend: $50 – $95",
"This role responds to general inquiries from the public and forwards special circumstances to appropriate officials. Stipend: $85",
"This role sets up election equipment at polling places on election eve. Provides access to polling places on election day. Disassembles and stores the election equipment after the polls close on election day. Stipend: $60 – $140",
"This role assists voters at the polling place while ensuring the integrity of the voting process. Precinct Officials operate the Information and Ballot Demonstration Station, Poll Book Station, Ballot Box Station, and eSlate Station. Stipend: $5 – $175",
"This role Monitors the polling places to ensure Officials are following standard operating procedures; and replenishes supplies as necessary. Must have a valid driver’s license."];

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
    roles.map((currVal, index) => listRoles += "<br> -" + roles[index].toLowerCase());
    botText("What role are you looking to volunteer for, "+name+"?<br><br>Current available roles:"+listRoles);
    qNum = 2;
  }else if(qNum === 2) {
    if ($('#input')[0].value.toLowerCase() === roles[0].toLowerCase()){
      botText(explanations[0]);
    }else if ($('#input')[0].value.toLowerCase() === roles[1].toLowerCase()){
      botText(explanations[1]);
    }else if ($('#input')[0].value.toLowerCase() === roles[2].toLowerCase()){
      botText(explanations[2]);
    }else if ($('#input')[0].value.toLowerCase() === roles[3].toLowerCase()){
      botText(explanations[3]);
    }else if ($('#input')[0].value.toLowerCase() === roles[4].toLowerCase()){
      botText(explanations[4]);
    }else if ($('#input')[0].value.toLowerCase() === roles[5].toLowerCase()){
      botText(explanations[5]);
    }else if ($('#input')[0].value.toLowerCase() === roles[6].toLowerCase()){
      botText(explanations[6]);
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