"use strict";

var Gauntlet = (function(originalGauntlet){

	originalGauntlet.outputHeroStats = function(hero) {

		var startingHeroStats = document.getElementById("hero__stats");
		var heroStatString = "";
		var capName = hero.playerName.toUpperCase();

		heroStatString += `<div id="hero__stats" class="hero__stats">
										   <p>Welcome ${capName} the ${hero.class}.</p>
 	 									   <p>Your current health is ${hero.health}.</p>
										   <p>We applaud your choice of ${hero.weapon},</p>
								       <p>providing ${hero.weapon.damage} points of damage.</p></div>`

		startingHeroStats.innerHTML = heroStatString;
	};

	originalGauntlet.outputEnemyStats = function(enemy) {

		var startingEnemyStats = document.getElementById("enemy__stats");
		var enemyStatString = "";

		enemyStatString += `<div id="enemy__stats" class="enemy__stats">
		  									<p>You must battle this ${enemy.species.name} ${enemy.class.name}</p>
		  									<p>with health of ${enemy.health}.</p>
											  <p>Your foe will wield ${enemy.weapon}, 
											  which carries ${enemy.weapon.damage} points of damage.</p></div>`;

		startingEnemyStats.innerHTML = enemyStatString;
	};

	originalGauntlet.outputBattleStats = function(heroHealth, enemyHealth) {

		var startingBattleStats = document.getElementById("battle__stats");
		var battleStatString = "";

		battleStatString += `<div id="battle__stats" class="battle__stats">
												 <p>Your health is now ${heroHealth}!</p>
												 <p>Your foe's health is ${enemyHealth}!</p></div>`

		startingBattleStats.innerHTML = battleStatString;
	};

	originalGauntlet.outputWinner = function(winner) {
    var winnerStats = document.getElementById("battle__stats");
    var winnerString;

    if (winner === "hero") {
      winnerString = "You have vanquished your foe!";
      Gauntlet.toggleContinuePlayBtn();
    }
    else {
      winnerString = "Sorry you're dead, loser.";
    }

    winnerStats.innerHTML = `<div class="battle__stats"> <h1>GAME OVER</h1>
                              <p>${winnerString}</p></div>`;

    Gauntlet.hideAttackBtn();
    Gauntlet.toggleRestartBtn();

  };

  originalGauntlet.hideAttackBtn = function() {
    	document.getElementById("attackTwo").style.visibility = "hidden";
  };

  originalGauntlet.showAttackBtn = function() {
      document.getElementById("attackTwo").style.visibility = "visible";
  };


	originalGauntlet.toggleRestartBtn = function() {
		  document.getElementById("playAgain").classList.toggle("hidden");
			//document.getElementById("playAgain").classList.add("visible");
	};

	originalGauntlet.toggleContinuePlayBtn = function() {
		  document.getElementById("continuePlay").classList.toggle("hidden");
			//document.getElementById("continuePlay").classList.add("visible");
	};



	return originalGauntlet;

}) (Gauntlet || {});

