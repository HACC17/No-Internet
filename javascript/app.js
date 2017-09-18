$(document).ready(function() {
  $('#welcomeScreen').hide().delay(200).fadeIn(1000);
  setTimeout(() => { $('#navigation')[0].style.animationPlayState = "running";}, 500);
});

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
  var objDiv = document.getElementById("chatLog");
  objDiv.scrollTop = objDiv.scrollHeight;
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

  if(qNum === 0) {
    volunteers.push(new Volunteer(null, null, null));
    let userInput = $('#input')[0].value.toLowerCase();
    if(userInput.includes("yea") || userInput.includes("yes") || userInput.includes("yeah") || userInput.includes("sure")) {//check if user responds with yes
      botText("May I please have your name?");
      qNum = 1;
    }else{
      botText('Sorry I didn\'t quite get that, try answering again with the keywords, "Yes" or "Sure".');
    }
  }else if(qNum === 1) {
    var name = $('#input')[0].value;
    volunteers[0]._name = name;
    /*for (var i = 0; i < roles.length; i++) {
      listRoles += "<br> -"+ roles[i].toLowerCase();
    }*/
    //use map instead
    //ADD conditional in here to check if their name is right
    if(name.includes('') && name.length > 0){ //checks if name was inputted
      botText("Is " + name + " the correct name?");
      qNum = 2;
    }else{
      botText("That is not a name! Re-enter your proper name");
    }
  }else if(qNum === 2) {
    let userInput = $('#input')[0].value.toLowerCase();
    if(userInput.includes("yea") || userInput.includes("yes") || userInput.includes("yeah") || userInput.includes("correct")){
      var listRoles = "";
      roles.map((currVal, index) => listRoles += "<br> -" + roles[index].toLowerCase());
      botText("What role are you looking to volunteer for, "+volunteers[0]._name+"?<br><br>Current available roles:"+listRoles);
      qNum = 3;
    }else if(userInput.includes("no") || userInput.includes("nope")){
      qNum = 1;
      botText("Please Re-enter your name");
    }  
  }else if(qNum === 3) {
    if ($('#input')[0].value.toLowerCase() === roles[0].toLowerCase()){
      botText("Are you sure you want to take the role of " + roles[0].toLowerCase() + "?");
      qNum =4;
    }else if ($('#input')[0].value.toLowerCase() === roles[1].toLowerCase()){
      volunteers[0]._role = $('#input')[0].value.toLowerCase();
      botText("Are you sure you want to take the volunteer position of " + roles[1].toLowerCase() + "?");
      qNum =4;
    }else if ($('#input')[0].value.toLowerCase() === roles[2].toLowerCase()){
      volunteers[0]._role = $('#input')[0].value.toLowerCase();
      botText("Are you sure you want to take the volunteer position of " + roles[2].toLowerCase() + "?");
      qNum =4;
    }else if ($('#input')[0].value.toLowerCase() === roles[3].toLowerCase()){
      volunteers[0]._role = $('#input')[0].value.toLowerCase();
      botText("Are you sure you want to take the volunteer position of " + roles[3].toLowerCase() + "?");
      qNum =4;
    }else if ($('#input')[0].value.toLowerCase() === roles[4].toLowerCase()){
      volunteers[0]._role = $('#input')[0].value.toLowerCase();
      botText("Are you sure you want to take the volunteer position of " + roles[4].toLowerCase() + "?");
      qNum =4;
    }else if ($('#input')[0].value.toLowerCase() === roles[5].toLowerCase()){
      volunteers[0]._role = $('#input')[0].value.toLowerCase();
      botText("Are you sure you want to take the volunteer position of " + roles[5].toLowerCase() + "?");
      qNum =4;
    }else if ($('#input')[0].value.toLowerCase() === roles[6].toLowerCase()){
      volunteers[0]._role = $('#input')[0].value.toLowerCase();
      botText("Are you sure you want to take the volunteer position of " + roles[6].toLowerCase() + "?");
      qNum =4;
    }else{
      botText("That volunteer role does not exist. Please try again and type the role as seen above");
    }
  }else if(qNum === 4){
    let userInput = $('#input')[0].value.toLowerCase();
    if(userInput.includes("yea") || userInput.includes("yes") || userInput.includes("yeah") || userInput.includes("correct")){
      botText("Here are the days we have available for that role");
      setTimeout(() => {
        if($(window).width() < 571) { //checks window
          openOverlay(2);
        }else{
          openOverlay(1);
        }
      }, 1000);
      qNum = 5;
    }else if(userInput.includes("no") || userInput.includes("nope")){
      qNum = 3;
      var listRoles = "";
      roles.map((currVal, index) => listRoles += "<br> -" + roles[index].toLowerCase());
      botText("Plase pick a role:"+listRoles);
    }
  }else if(qNum === 5){

  }

  $('#input')[0].value = ''; //clears textboxt after enter
  var objDiv = document.getElementById("chatLog");
  objDiv.scrollTop = objDiv.scrollHeight;
}
var name = "";
var roles = ["CONTROL CENTER OPERATOR", "COUNTING CENTER OFFICIAL", "DELIVERY/COLLECTION OFFICIAL", "ELECTION INFORMATION SERVICES OFFICIAL","FACILITY OFFICIAL","PRECINCT OFFICIAL","PRECINCT TROUBLESHOOTER"];

overlayMode = 0;
function openOverlay(x) {
  if(x === 2){ //open smaller overlay
    $("#side-nav")[0].style.width = "100%";
    setTimeout(() => {$("#side-nav")[0].style.height = "40%";}, 600); //needs to be delayed otherwise it will expand from corner
    $("#chat")[0].style.top = "40%";
    setTimeout(() => {$('#overlayTab')[0].style.display = "none";}, 700);
    setTimeout(() => {$('#overlayTab')[0].style.animationPlayState = "paused";}, 400);
    overlayMode = 1;
  }else if(x === 1){ //open larger overlay
    $("#side-nav")[0].style.height = "100%";
    $("#side-nav")[0].style.width = "40%";
    $("#chat")[0].style.left = "40%";
    setTimeout(() => {$('#overlayTab')[0].style.display = "none";}, 300);
    setTimeout(() => {$('#overlayTab')[0].style.animationPlayState = "paused";}, 400);
  }
}

function closeOverlay(x) {
  if(x === 2){ //close smaller overlay
    $("#side-nav")[0].style.height = "0";
    $("#chat")[0].style.top= "0";
    $('#overlayTab')[0].style.display = "inline";
    setTimeout(() => {$("#side-nav")[0].style.width = "40%";}, 600);
    setTimeout(() => {$('#overlayTab')[0].style.animationPlayState = "running";}, 700);
    overlayMode = 0;
  }else if(x === 1){ //close larger overlay
    $("#side-nav")[0].style.width = "0";
    $("#chat")[0].style.left= "0";
    $('#overlayTab')[0].style.display = "inline";
    setTimeout(() => {$('#overlayTab')[0].style.animationPlayState = "running";}, 700);
  }
}

console.log($(window).width())
$('#overlayTab').click(function(e) {  
  if($(window).width() < 571) { //checks window
    openOverlay(2);
  }else{
    openOverlay(1);
  }
});

$('#closeButton').click(function(e) {  
  if($(window).width() < 571 || overlayMode === 1) { //checks window
    closeOverlay(2);
  }else{
    closeOverlay(1);
  }
});

var volunteers = [];

class Volunteer{
  constructor(name, age, role){
    this._name = name;
    this._age = age;
    this._role = role;
  }
}