function start() {
	//$('chat')[0] is equivalent to document.getElementById('chat')
	//the "[0]" is needed as jQuery returns the DOM element in an array
	$('#info')[0].style.animationPlayState = "running";

	setTimeout(() => { $('#welcomeScreen')[0].style.animationPlayState = "running";}, 550)

  setTimeout(() => { 
		$('#welcomeScreen')[0].style.display = "none";
		$('#chat')[0].style.display = "inline-block";
		$('#daizzy')[0].style.animationPlayState = "running";
	}, 1750); //makes welcome screen invisible (display: none doe snot work within keyframes)

}