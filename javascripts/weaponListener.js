"use strict";

var weaponId;
var weaponLink = document.getElementsByClassName("weapon");
var clickedStuff = document.getElementsByClassName("chosen");

var Gauntlet = (function(originalGauntlet) {

	originalGauntlet.addWeaponClick = function(currentWeapon) {

		for (let i=0; i < weaponLink.length; i++) {
				 var currentWeapon =  weaponLink[i];
				currentWeapon.addEventListener("click", Gauntlet.weaponClicked);
		};
	};

	originalGauntlet.weaponClicked = function(){
		var clickedWeapon = event.target.closest('div');
		var weaponId = clickedWeapon.getAttribute("id");

		if (clickedStuff.length !== 0) {
				clickedStuff[0].classList.remove("chosen");
				clickedWeapon.classList.add("chosen");
			}
		else {
				clickedWeapon.classList.add("chosen");
			}

		Gauntlet.setWeapon(weaponId);
	};


 return originalGauntlet;

}) (Gauntlet || {});

