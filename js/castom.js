"use strict";


let modeIcon = document.getElementById('modeIcon');
let logo = document.getElementById('logo');

modeIcon.addEventListener("click", function(){
	document.body.classList.toggle("darkMode");

	if (document.body.classList.contains("darkMode")) {
		logo.src = "images/logo/Light-Logo.png";
		modeIcon.classList.add("fa-sun");
		modeIcon.classList.remove("fa-moon");
	} else {
		logo.src = "images/logo/Dark-Logo.png";
		modeIcon.classList.add("fa-moon");
		modeIcon.classList.remove("fa-sun");
	}
})