"use strict";
var Gauntlet = (function(originalGauntlet){
	//display starting stats: health, weapon, class
	//display char''s h,w,c above don't need a loop

	//print to DOM
		//get hero's name into DOM
			
		originalGauntlet.outputHeroStats =	function(hero) {
			var startingStats = document.getElementById("stats");

			var heroStatString = "";
			heroStatString += `<div><p>Hello ${hero.playerName}</p><p>Your health is  ${hero.health}</p>`;

			heroStatString += `<p>Your weapon points are ${hero.weapon.damage}</p></div>`;
			startingStats.innerHTML += heroStatString;

		}; 
	
	 return originalGauntlet;

}) (Gauntlet || {});

