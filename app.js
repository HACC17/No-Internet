function start() {
	//$('chat')[0] is equivalent to document.getElementById('chat')
	//the "[0]" is needed as jQuery returns the DOM element in an array
	$('#welcomeScreen')[0].style.animationPlayState = "running";

	setTimeout(() => { $('#chat')[0].style.animationPlayState = "running"; }, 450)

  setTimeout(() => { 
		$('#welcomeScreen')[0].style.display = "none";
		$('#daizzy')[0].style.animationPlayState = "running";
	}, 1400); //makes welcome screen invisible (display: none doe snot work within keyframes)

}