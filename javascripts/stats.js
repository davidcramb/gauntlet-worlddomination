"use strict";
var Gauntlet = (function(originalGauntlet){
	//display starting stats
		//calculate stats

	//print to DOM
		//get hero's name into DOM
			//capturing hero.name from the object we made
		originalGauntlet.outputHeroStats =	function(hero) {
			console.log("hero", hero);
				var startingStats = document.getElementById("stats");
				startingStats.innerHTML = "Your weapon choice is " + hero.weapon;
		}; 
		// or
		// originalGauntlet.outputHeroStats =	function() {
		// 		var startingStats = document.getElementById("stats");
		// 		startingStats.innerHTML = "Your weapon choice is " + hero.weapon;
		// }; 
	//display attack stats
		// originalGauntlet.afterAttackHeroStats = 
	// var outputStuff = function(object) {	

	// 		var output = '';
	// 		for (var property in object) {
 //  		output += property + ': ' + object[property]+'; ';
	// 		};
	// alert(output);
	// };

	//calculate post-attack stats

	//print to DOM




	 return originalGauntlet;

}) (Gauntlet || {});