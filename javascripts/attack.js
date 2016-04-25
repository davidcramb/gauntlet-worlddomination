"use strict";

  var heroHealth;
  var enemyHealth;

  var Gauntlet = (function(originalGauntlet){

  originalGauntlet.setHealth = function(hero, enemy){
    heroHealth = hero.health;
    enemyHealth = enemy.health;
  };

  originalGauntlet.heroAttackDamage = function (hero) {
    let heroDamage = Math.floor(Math.random() * hero.weapon.damage +1);
    return heroDamage;
  };
  originalGauntlet.enemyAttackDamage = function (enemy) {
    let enemyDamage = Math.floor(Math.random() * enemy.weapon.damage + 1)
    return enemyDamage
  }

  originalGauntlet.attackDamage = function (char) {
    let damageOutput = Math.floor(Math.random() * char.weapon.damage + 1);
    return damageOutput

  }

  originalGauntlet.attack = function (hero, enemy) {
    heroHealth -= Gauntlet.attackDamage(enemy)
    enemyHealth -= Gauntlet.attackDamage(hero)

    originalGauntlet.checkHealth(heroHealth, enemyHealth);
  };

  originalGauntlet.checkMagicUser = function (hero) {
    if (hero.class.magical) {
      $(".attack").append(`<a class="card__link btn btn--big btn--orange" href="#" next="card--battleground">
                          <span class="btn__prompt">&gt;</span><span class="btn__text">SpellBook</span></a>`);
    }
  }

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