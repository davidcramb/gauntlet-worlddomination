"use strict";

  var heroHealth;
  var enemyHealth;

  var Gauntlet = (function(originalGauntlet){

  originalGauntlet.setHealth = function(hero, enemy){
    heroHealth = hero.health;
    enemyHealth = enemy.health;
  };

  originalGauntlet.attackDamage = function (char) {
    // --- Calculates a random damage amount
    let damageOutput = char.weapon.damage + Math.floor(Math.floor(Math.random() * char.strength) / 10)
    return damageOutput
  };

  originalGauntlet.attack = function (hero, enemy) {
    heroHealth -= Gauntlet.attackDamage(enemy)
    enemyHealth -= Gauntlet.attackDamage(hero)
    // Checks to see if either player is dead (or has won the game)
    originalGauntlet.checkHealth(heroHealth, enemyHealth);
  };


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

  // ----- Evaluates hero's class to see if spell book use is allowed ----- //
  originalGauntlet.checkMagicUser = function (hero) {
    if (hero.class.magical) {
      $(".attack").append(`<a class="card__link btn btn--big btn--orange" href="#" next="card--battleground">
                          <span class="btn__prompt">&gt;</span><span class="btn__text">SpellBook</span></a>`);
    }
  };

  return originalGauntlet;
}) (Gauntlet || {} );