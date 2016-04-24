"use strict";

var Gauntlet = (function(originalGauntlet){

	originalGauntlet.outputHeroStats = function(hero) {

		var startingHeroStats = document.getElementById("hero__stats");
		var heroStatString = "";
		var capName = hero.playerName.toUpperCase();

		heroStatString += `<div id="hero__stats" class="hero__stats">`
		heroStatString += `<p>Welcome ${capName} the ${hero.class}.</p>`;
		heroStatString += `<p>Your current health is ${hero.health}.</p>`;
		heroStatString += `<p>We applaud your choice of ${hero.weapon},</p>`;
    heroStatString += `<p>providing ${hero.weapon.damage} points of damage.</p></div>`;

		startingHeroStats.innerHTML = heroStatString;
	};

	originalGauntlet.outputEnemyStats = function(enemy) {

		var startingEnemyStats = document.getElementById("enemy__stats");
		var enemyStatString = "";

		enemyStatString += `<div id="enemy__stats" class="enemy__stats">`
		enemyStatString += `<p>You must battle this ${enemy.species.name} ${enemy.class.name}</p>`;
		enemyStatString += `<p>with health of ${enemy.health}.</p>`;
		enemyStatString += `<p>Your foe will wield ${enemy.weapon}, `;
		enemyStatString += `which carries ${enemy.weapon.damage} points of damage.</p></div>`;

		startingEnemyStats.innerHTML = enemyStatString;
	};

	originalGauntlet.outputBattleStats = function(heroHealth, enemyHealth) {

		var startingBattleStats = document.getElementById("battle__stats");
		var battleStatString = "";

		battleStatString += `<div id="battle__stats" class="battle__stats">`
		battleStatString += `<p>Your health is now ${heroHealth}!</p>`;
		battleStatString += `<p>Your foe's health is ${enemyHealth}!</p></div>`;

		startingBattleStats.innerHTML = battleStatString;
	};

	originalGauntlet.outputWinner = function(winner) {
    var winnerStats = document.getElementById("battle__stats");
    var winnerString;

    if (winner === "hero") {
    	winnerString = "You have vanquished your foe!";
    }
    else {
    	winnerString = "Sorry you're dead, loser.";
    }

    winnerStats.innerHTML = `<div class="battle__stats"> <h1>GAME OVER</h1>
                              <p>${winnerString}</p></div>`;

    // Here we need to add a "play again" button instead of the "attack" button

	};

	return originalGauntlet;

}) (Gauntlet || {});

