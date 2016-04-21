"use strict";

var classId;
var classLink = document.getElementsByClassName("class__link");
var clickedThings = document.getElementsByClassName("selected");

var Gauntlet = (function(originalGauntlet){

	originalGauntlet.addClickEvent = function(currentClass) {

				for (let i=0; i<classLink.length; i++) {
						 var currentClass =  classLink[i];
						currentClass.addEventListener("click", Gauntlet.markClicked);
				};
	};

	originalGauntlet.markClicked = function(){
		var clickedClass = event.target.closest('div');
		var classId = clickedClass.getAttribute("id");

		if (clickedThings.length !== 0) {
				clickedThings[0].classList.remove("selected");
				clickedClass.classList.add("selected");
			}
		else {
				clickedClass.classList.add("selected");
			}
		console.log("I selected a class.");
		Gauntlet.makeCharacter(classId);
	};


 return originalGauntlet;

}) (Gauntlet || {});
