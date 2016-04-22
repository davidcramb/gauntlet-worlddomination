"use strict";

var classId;

var Gauntlet = (function(originalGauntlet){

  var hero;

  originalGauntlet.createHero = function(classId) {
    hero = new Gauntlet.Combatants.Human($('#player-name').val());
    hero.setClass(classId);
  };

  originalGauntlet.setWeapon = function(weaponId) {
    console.log("Weapon id is", weaponId);
    if (weaponId === "Weapon") {
      hero.setWeapon("bare hands");
    }
    else {
      hero.setWeapon(weaponId);
    }

    console.log(hero.toString());
  };


 return originalGauntlet;

}) (Gauntlet || {});