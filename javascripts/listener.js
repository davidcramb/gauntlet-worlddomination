"use strict";

var classLink = document.getElementsByClassName("class__link");
var clickedThings = document.getElementsByClassName("selected");

function addClickEvent(currentClass) {

	// console.log("click");
			for (let i=0; i<classLink.length; i++) {
				console.log(classLink[i]);
					 var currentClass =  classLink[i];
					currentClass.addEventListener("click", markClicked);
			};
};

function markClicked(){
	console.log(event)
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




//david's test functions
var setPlayerName = function () {
	let playerName = $('#player-name').val();
	Gauntlet.Combatants.Player.playerName = playerName
}
$('.card__link[next=card--class]').click(setPlayerName)

