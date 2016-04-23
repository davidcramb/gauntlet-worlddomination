"use strict";
  var heroHealth = 47;
  var enemyHealth = 50;
  var Gauntlet = (function(originalGauntlet){

  originalGauntlet.setHealth = function(hero, enemy){
    hero.health = heroHealth;
    enemy.health = enemyHealth;
    console.log("hero", hero.health)
    console.log("enemy", enemy.health)
  };

  originalGauntlet.attack = function (hero, enemy) {
    heroHealth -= enemy.weapon.damage;
    console.log(heroHealth)
  }
  return originalGauntlet;
}) (Gauntlet || {} );