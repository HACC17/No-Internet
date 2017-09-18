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