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
		var randomHeroLimb = Gauntlet.randomLimb(hero);
		var randomEnemyLimb = Gauntlet.randomLimb(enemy);
		var randomHeroFlavor = Gauntlet.randomFlavor(hero);
		var randomEnemyFlavor = Gauntlet.randomFlavor(enemy);

		battleStatString += `<div id="battle__stats" class="battle__stats">
												 <p>The ${enemy.species.name} ${randomHeroFlavor}s you in the ${randomHeroLimb}.</p>
												 <p>Your health is now ${heroHealth}!</p>
												 <p>You ${randomEnemyFlavor} the ${enemy.species.name} in the ${randomEnemyLimb}</p>
												 <p>Your foe's health is ${enemyHealth}!</p></div>`

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

    Gauntlet.hideAttackBtn();
    Gauntlet.showRestartBtn();	
    Gauntlet.showContinePlayBtn();                          
  }; 

  originalGauntlet.hideAttackBtn = function() {
    	document.getElementById("attackTwo").style.visibility = "hidden";
  };	
  
	originalGauntlet.showRestartBtn = function() {
		  document.getElementById("playAgain").classList.remove("hidden");
			document.getElementById("playAgain").classList.add("visible");
	};


	originalGauntlet.randomLimb = function(char) {
		for (let i = 0; i < char.limbs.length; i++) {
			var randomizedLimb = char.limbs[Math.floor(Math.random() * char.limbs.length)]
			return randomizedLimb;
		}
	};

	originalGauntlet.randomFlavor = function(char) {
		for (let i = 0; i < char.weapon.flavor.length; i++) {
			var randomizedFlavor = char.weapon.flavor[Math.floor(Math.random() * char.weapon.flavor.length)]
			return randomizedFlavor;
		}
	};


	originalGauntlet.showContinePlayBtn = function() {
		  document.getElementById("continuePlay").classList.remove("hidden");
			document.getElementById("continuePlay").classList.add("visible");
	};
	

	return originalGauntlet;

}) (Gauntlet || {});

