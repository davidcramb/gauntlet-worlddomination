"use strict";

var weaponId = "";
var weaponLink = document.getElementsByClassName("weapon");
var clickedStuff = document.getElementsByClassName("chosen");


var Gauntlet = (function(originalGauntlet) {

  // ----- Adds an event listener to each element with the class 'weapon' ----- //
	originalGauntlet.addWeaponClick = function(currentWeapon) {

		for (let i=0; i < weaponLink.length; i++) {
				 var currentWeapon =  weaponLink[i];
				// --- says 'call the weaponClicked function if the element gets clicked' --- //
				currentWeapon.addEventListener("click", Gauntlet.weaponClicked);
		};
	};


	originalGauntlet.weaponClicked = function(){
		var clickedWeapon = event.target.closest("div");
		    weaponId = clickedWeapon.getAttribute("id");

		if (clickedStuff.length !== 0) {
				clickedStuff[0].classList.remove("chosen");
				clickedWeapon.classList.add("chosen");
			}
		else {
				clickedWeapon.classList.add("chosen");
			}
	};


 return originalGauntlet;

}) (Gauntlet || {});

