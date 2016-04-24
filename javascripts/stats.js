"use strict";
var Gauntlet = (function(originalGauntlet){

	//display starting stats: health, weapon, class


	//print to DOM
		//get hero's name into DOM
			//capturing hero.name from the object we made

		originalGauntlet.outputHeroStats = function(hero) {

				var startingHeroStats = document.getElementById("hero__stats");
				var heroStatString = "";
				var capName = hero.playerName.toUpperCase();

				heroStatString += `<div id="hero" class="hero_stats">`
				heroStatString += `<p>Welcome ${capName} the ${hero.class}.</p>`;
				heroStatString += `<p>We applaud your choice of ${hero.weapon}.</p></div>`;

				startingHeroStats.innerHTML = heroStatString;
		};

   originalGauntlet.outputEnemyStats = function(enemy) {

				var startingEnemyStats = document.getElementById("enemy__stats");
				var enemyStatString = "";

				enemyStatString += `<div id="enemy" class="enemy_stats">`
				enemyStatString += `<p>You must battle this ${enemy.species.name} ${enemy.class.name}.</p>`;
				enemyStatString += `<p>Your foe will wield ${enemy.weapon}.</p></div>`;

				startingEnemyStats.innerHTML = enemyStatString;
		};




	 return originalGauntlet;

}) (Gauntlet || {});