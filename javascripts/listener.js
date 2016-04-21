"use strict";

var classLink = document.getElementsByClassName("class__link");
var clickedThings = document.getElementsByClassName("selected");

function addClickEvent(currentClass) {

	// console.log("click");
			for (let i=0; i<classLink.length; i++) {
				console.log("forLoop");
					 var currentClass =  classLink[i];
					currentClass.addEventListener("click", markClicked);
			};
};

function markClicked(){
	var clickedClass = event.target.closest('div');
	var clickedId = clickedClass.getAttribute("id");
	if (clickedThings.length !== 0) {
			clickedThings[0].classList.remove("selected");
			clickedClass.classList.add("selected");
		}
	else {
			clickedClass.classList.add("selected");
		}
};



