"use strict";

  var heroHealth;
  var enemyHealth;

  var Gauntlet = (function(originalGauntlet){

// ------- Sets your hero's health to a variable so it can be changed easily ------- //
  originalGauntlet.setHeroHealth = function(hero){
    heroHealth = hero.health;
  };
  // --- Sets enemy's health to a variable (as above). This needs to be a  --- //
  // --- separate function from setHeroHealth in order to allow the hero   --- //
  // --- to continue playing (with some random healing) later in the game  --- //
  originalGauntlet.setEnemyHealth = function(enemy) {
    enemyHealth = enemy.health;
  };

  // --- Creates a random 'healing spell' amount for healing the hero --- //
  originalGauntlet.getHealthSpell = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  // --- This only gets used when resetting the hero's health to continue  --- //
  // --- game play after an enemy has been vanquished. Could be used later --- //
  // --- as an additional game play feature, but we have not added it yet. --- //
  originalGauntlet.healHero = function(){
    var healSpell = Math.floor(Gauntlet.getHealthSpell(25, 65));
    heroHealth += healSpell;
  };


// ---------- Main attack function for game play  ----------- //
  originalGauntlet.attack = function (hero, enemy) {
    heroHealth -= Gauntlet.attackDamage(enemy)
    enemyHealth -= Gauntlet.attackDamage(hero)
    // Checks to see if either player is dead (or has won the game)
    originalGauntlet.checkHealth(heroHealth, enemyHealth);
  };

  // --- Calculates the amount of damage caused by adding randomness for extra fun --- //
  originalGauntlet.attackDamage = function (char) {
    // --- Calculates a random damage amount
    let damageOutput = char.weapon.damage + Math.floor(Math.floor(Math.random() * char.strength) / 10)
    return damageOutput
  };

  // --- Checks to see if either player is dead (at or below 0 points) --- //
  originalGauntlet.checkHealth = function(hero, enemy) {

    if (heroHealth <= 0) {
      // --- output message that enemy has won the game
      Gauntlet.outputWinner("enemy");
    } else if (enemyHealth <= 0) {
      // --- output message that hero has won the game
      Gauntlet.outputWinner("hero");
    } else {
      // --- If neither player is dead, give stats so play can continue
      Gauntlet.outputBattleStats(heroHealth, enemyHealth);
    }
  };

// --------- Evaluates hero's class to see if spell book use is allowed --------- //
  originalGauntlet.checkMagicUser = function (hero) {
    if (hero.class.magical) {
      $(".attack").append(`<a class="card__link btn btn--big btn--orange" href="#" next="card--battleground">
                          <span class="btn__prompt">&gt;</span><span class="btn__text">SpellBook</span></a>`);
    }
  };

  return originalGauntlet;
}) (Gauntlet || {} );