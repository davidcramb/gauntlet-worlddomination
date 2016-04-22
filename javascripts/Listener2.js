"use strict";

var classId;
var classLink = document.getElementsByClassName("classWeapon");
var clickedThing = document.getElementsByClassName("chosen");

var Gauntlet = (function(originalGauntlet){

	originalGauntlet.addWeaponClick = function(currentClass) {

				for (let i=0; i<classLink.length; i++) {
						 var currentClass =  classLink[i];
						currentClass.addEventListener("click", Gauntlet.weaponClicked);
				};
	};


	originalGauntlet.weaponClicked = function(){
		var clickedWeapon = event.target.closest('div');
		var weaponId = clickedWeapon.getAttribute("id");

		if (clickedThing.length !== 0) {
				clickedThing[0].classList.remove("chosen");
				clickedWeapon.classList.add("chosen");
			}
		else {
				clickedWeapon.classList.add("chosen");
			}
		console.log("I chose a weapon.");
		// Gauntlet.Armory.Weapon(name);
	};


 return originalGauntlet;

}) (Gauntlet || {});

