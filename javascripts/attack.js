"use strict";

  var heroHealth;
  var enemyHealth;

  var Gauntlet = (function(originalGauntlet){

  originalGauntlet.setHealth = function(hero, enemy){
    heroHealth = hero.health;
    enemyHealth = enemy.health;

  };

  originalGauntlet.attack = function (hero, enemy) {
    heroHealth -= enemy.weapon.damage;
    enemyHealth -= hero.weapon.damage;

    originalGauntlet.checkHealth(heroHealth, enemyHealth);
  };

  originalGauntlet.checkHealth = function(hero, enemy) {
    if (heroHealth <= 0) {
      Gauntlet.outputWinner("enemy");
      //run a new Game Over function that that either restarts the battle or takes player to the first page
    } else if (enemyHealth <= 0) {
      Gauntlet.outputWinner("hero");
      //new function that asks if player wants to fight a new enemy or quit
    } else {
      Gauntlet.outputBattleStats(heroHealth, enemyHealth);
    }
  };

  return originalGauntlet;
}) (Gauntlet || {} );