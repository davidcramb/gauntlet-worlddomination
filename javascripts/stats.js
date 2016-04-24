"use strict";
var Gauntlet = (function(originalGauntlet){

	originalGauntlet.outputHeroStats = function(hero) {

		var startingHeroStats = document.getElementById("hero__stats");
		var heroStatString = "";
		var capName = hero.playerName.toUpperCase();

		heroStatString += `<div id="hero" class="hero_stats">`
		heroStatString += `<p>Welcome ${capName} the ${hero.class}.</p>`;
		heroStatString += `<p>Your current health is ${hero.health}.</p>`;
		heroStatString += `<p>We applaud your choice of ${hero.weapon},</p>`;
    heroStatString += `<p>providing ${hero.weapon.damage} points of damage.</p></div>`;

		startingHeroStats.innerHTML = heroStatString;
	};

	originalGauntlet.outputEnemyStats = function(enemy) {

		var startingEnemyStats = document.getElementById("enemy__stats");
		var enemyStatString = "";

		enemyStatString += `<div id="enemy" class="enemy_stats">`
		enemyStatString += `<p>You must battle this ${enemy.species.name} ${enemy.class.name}</p>`;
		enemyStatString += `<p>with health of ${enemy.health}.</p>`;
		enemyStatString += `<p>Your foe will wield ${enemy.weapon}, `;
		enemyStatString += `which carries ${enemy.weapon.damage} points of damage.</p></div>`;

		startingEnemyStats.innerHTML = enemyStatString;
	};


	 return originalGauntlet;

}) (Gauntlet || {});

