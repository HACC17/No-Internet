/*
//fixed with target="_blank" in HTML to open HTML in new tab

function openInNewTab(url) {
	var win = window.opn(url, '_blank');
	win.focus();
}
*/

$(document).ready(function() {
  setTimeout(() => { 
  	$('#navigation')[0].style.animationPlayState = "running";
  	setTimeout(() => {$('#school-logo')[0].style.animationPlayState = "running";}, 800);
  	setTimeout(() => {$('#information')[0].style.animationPlayState = "running";}, 1300);
  	setTimeout(() => {$('#profile-container')[0].style.animationPlayState = "running";}, 1700);
  }, 300);
});

//easter egg
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5, 6];
function easterEgg(x){
  arr1.push(x);
}

function easterCheck(){
  if(arr1.toString() == arr2.toString()){
    
  }
}
