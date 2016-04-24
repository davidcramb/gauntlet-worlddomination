"use strict";
  var heroHealth;
  var enemyHealth;
  var Gauntlet = (function(originalGauntlet){

  originalGauntlet.setHealth = function(hero, enemy){
    heroHealth = hero.health;
    enemyHealth = enemy.health;
    console.log("Hero Health set to ", hero.health)
    console.log("Enemy Health set to", enemy.health)
  };

  originalGauntlet.attack = function (hero, enemy) {
    heroHealth -= enemy.weapon.damage;
    enemyHealth -= hero.weapon.damage;
    console.log("Hero's health is now: ", heroHealth)
    console.log("Enemy's health is now: ", enemyHealth)
    originalGauntlet.checkHeroHP(hero);
    originalGauntlet.checkEnemyHP(enemy);
  };

  originalGauntlet.checkHeroHP = function (hero) {
    if (heroHealth <= 0) {
      console.log("The hero is defeated!")
      //run a new Game Over function that that either restarts the battle or takes player to the first page
    }
  }

  originalGauntlet.checkEnemyHP = function (enemy) {
    if (enemyHealth <= 0) {
      console.log("The enemy is defeated!")
      //new function that asks if player wants to fight a new enemy or quit
    }
  }
  return originalGauntlet;
}) (Gauntlet || {} );