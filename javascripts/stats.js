"use strict";

var Gauntlet = (function(originalGauntlet){

// ---------- Prints welcome message and beginning hero stats to the DOM ---------- //
	originalGauntlet.outputHeroStats = function(hero) {

		var startingHeroStats = document.getElementById("hero__stats");
		var heroStatString = "";
    // --- converts entire hero name to capital letters --- //
		var capName = hero.playerName.toUpperCase();

		heroStatString += `<div id="hero__stats" class="hero__stats">
										   <p>Welcome ${capName} the ${hero.class}.</p>
 	 									   <p>Your current health is ${heroHealth}.</p>
										   <p>We applaud your choice of ${hero.weapon},</p>
								       <p>providing ${hero.weapon.damage} points of damage.</p></div>`

		startingHeroStats.innerHTML = heroStatString;
	};

// ---------- Prints beginning enemy data to the DOM ---------- //
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

// ---------- Prints battle statistics to the DOM ---------- //
	originalGauntlet.outputBattleStats = function(heroHealth, enemyHealth) {

		var startingBattleStats = document.getElementById("battle__stats");
		var battleStatString = "";

    // --- Generates random limb for hero and enemy (see functions below) --- //
		var randomHeroLimb = Gauntlet.randomLimb(hero);
		var randomEnemyLimb = Gauntlet.randomLimb(enemy);

    // --- Generates random verb to describe weapon strike --- //
		var randomHeroFlavor = Gauntlet.randomFlavor(hero);
		var randomEnemyFlavor = Gauntlet.randomFlavor(enemy);

		battleStatString += `<div id="battle__stats" class="battle__stats">
												 <p>The ${enemy.species.name} ${randomHeroFlavor}s you in the ${randomHeroLimb}.</p>
												 <p>Your health is now ${heroHealth}!</p>
												 <p>You ${randomEnemyFlavor} the ${enemy.species.name} in the ${randomEnemyLimb}</p>
												 <p>Your foe's health is ${enemyHealth}!</p></div>`

		startingBattleStats.innerHTML = battleStatString;
	};

  // ----- Allows game to indicates strikes to random limbs ----- //
  originalGauntlet.randomLimb = function(char) {
    for (let i = 0; i < char.limbs.length; i++) {
      var randomizedLimb = char.limbs[Math.floor(Math.random() * char.limbs.length)]
      return randomizedLimb;
    }
  };

  // ----- Randomly chooses interesting verbs to describe weapon damage ----- //
  originalGauntlet.randomFlavor = function(char) {
    for (let i = 0; i < char.weapon.flavor.length; i++) {
      var randomizedFlavor = char.weapon.flavor[Math.floor(Math.random() * char.weapon.flavor.length)]
      return randomizedFlavor;
    }
  };

// ----- Prints winner messages to the DOM and hides the attack button ------ //
// ----- If hero dies, shows ONLY option to start over with a new hero ------ //
// ----- If hero wins, shows BOTH 'continue play' & 'new hero' options ------ //

	originalGauntlet.outputWinner = function(winner) {
    var winnerStats = document.getElementById("battle__stats");
    var winnerString;

    if (winner === "hero") {
      winnerString = "You have vanquished your foe!";
      // --- Allows player to continue w same hero --- //
      Gauntlet.toggleContinuePlayBtn();
    }
    else {
      winnerString = "Sorry you're dead, loser.";
    }

    winnerStats.innerHTML = `<div class="battle__stats"> <h1>GAME OVER</h1>
                              <p>${winnerString}</p></div>`;

    // --- Hides the attack button ------------- //
    Gauntlet.hideAttackBtn();
    // --- Shows 'restart w new hero' button --- //
    Gauntlet.toggleRestartBtn();

  };

  // ----------  Hides the attack button on game over   ------------- //
  originalGauntlet.hideAttackBtn = function() {
    	document.getElementById("attackTwo").style.visibility = "hidden";
  };

  // ----------  Shows attack button again if player continues ------ //
  originalGauntlet.showAttackBtn = function() {
      document.getElementById("attackTwo").style.visibility = "visible";
  };

  // ---------- Makes 'Restart w New Hero' button visible ---------- //
	originalGauntlet.toggleRestartBtn = function() {
		  document.getElementById("playAgain").classList.toggle("hidden");
	};

  // ---------- Makes 'Continue Playing' button visible  ---------- //
	originalGauntlet.toggleContinuePlayBtn = function() {
		  document.getElementById("continuePlay").classList.toggle("hidden");
  };


	return originalGauntlet;

}) (Gauntlet || {});

