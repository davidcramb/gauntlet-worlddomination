"use strict";

var classId;
var classLink = document.getElementsByClassName("class__link");
var clickedThings = document.getElementsByClassName("selected");

var Gauntlet = (function(originalGauntlet){

  // ---------- Set event listeners on all 'character class' buttons ---------- //

	originalGauntlet.addClickEvent = function(currentClass) {

				for (let i=0; i<classLink.length; i++) {
						 var currentClass =  classLink[i];
						currentClass.addEventListener("click", Gauntlet.markClicked);
				};
	};

  // ---------- Indicate when a player has clicked on a 'character class' ---------- //
  // ---------- Removes any previously selected 'character classes' first ---------- //

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

	};

	// originalGauntlet.setPlayerName = function () {
	// 	let playerName = $('#player-name').val();
	// 	Gauntlet.Combatants.Player.playerName = playerName;
	// }

	// $('.card__link[next=card--class]').click(Gauntlet.setPlayerName);


 return originalGauntlet;

}) (Gauntlet || {});



