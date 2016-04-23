"use strict";

var hero;
var enemy;

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.createHero = function(classId, weaponId) {

    // ----- creates a new hero, feeding in the user-inputted name ----- //
    hero = new Gauntlet.Combatants.Human($('#player-name').val());

    // ----- calls function (below) to set class by creating a new class object ----- //
    hero.setClass(Gauntlet.chooseCharacterClass(classId));

    // ----- calls function (below) to set weapon by creating a new weapon object ----- //
    hero.setWeapon(Gauntlet.chooseWeapon(weaponId));

  };

  originalGauntlet.chooseCharacterClass = function(classId) {
    // ---------- Takes the user's choice of class and sets up   ---------- //
    // ---------- structure for creating a new class that will   ---------- //
    // ---------- be used in the function above to set the class ---------- //
    switch (classId) {
      case "warrior":
        var x = new Gauntlet.GuildHall.Warrior();
        break;
      case "valkyrie":
        var x = new Gauntlet.GuildHall.Valkyrie();
        break;
      case "berserker":
        var x = new Gauntlet.GuildHall.Berserker();
        break;
      case "monk":
        var x = new Gauntlet.GuildHall.Monk();
        break;
      case "wizard":
        var x = new Gauntlet.GuildHall.Wizard();
        break;
      case "sorcerer":
        var x = new Gauntlet.GuildHall.Sorcerer();
        break;
      case "conjurer":
        var x = new Gauntlet.GuildHall.Conjurer();
        break;
      case "thief":
        var x = new Gauntlet.GuildHall.Thief();
        break;
      case "ninja":
        var x = new Gauntlet.GuildHall.Ninja();
        break;
      case "assassin":
        var x = new Gauntlet.GuildHall.Assassin();
        break;
      case "surprise":
        generateClass();
        break;
    }

    return x;
  };


// ----- Function to create new weapon object and add it to character ----- //

  originalGauntlet.chooseWeapon = function(weaponId) {
    // ---------- Takes the user's choice of weapon and sets up   ---------- //
    // ---------- structure for creating a new weapon that will   ---------- //
    // ---------- be used in the function above to set the weapon ---------- //

    switch (weaponId) {
      case "Weapon":
        var y = new Gauntlet.Armory.Weapon();
        break;
      case "BroadSword":
        var y = new Gauntlet.Armory.BroadSword();
        break;
      case "WarAxe":
        var y = new Gauntlet.Armory.WarAxe();
        break;
      case "Claymore":
        var y = new Gauntlet.Armory.Claymore();
        break;
      case "Mace":
        var y = new Gauntlet.Armory.Mace();
        break;
      case "Shuriken":
        var y = new Gauntlet.Armory.Shuriken();
        break;
      case "Sai":
        var y = new Gauntlet.Armory.Sai();
        break;
      case "Katana":
        var y = new Gauntlet.Armory.Katana();
        break;
      case "Tonfa":
        var y = new Gauntlet.Armory.Tonfa();
        break;
      case "BrassKnuckles":
        var y = new Gauntlet.Armory.BrassKnuckles();
        break;
      case "Potions":
        var y = new Gauntlet.Armory.Potions();
        break;
      case "Taser":
        var y = new Gauntlet.Armory.Taser();
        break;
      case "Staff":
        var y = new Gauntlet.Armory.Staff();
        break;
      case "ShrunkenHead":
        var y = new Gauntlet.Armory.ShrunkenHead();
        break;
      case "surprise":
        //generateWeapon();
        console.log("Make a surprise");
        break;
    }

    return y;

  };


  originalGauntlet.createEnemy = function() {


    enemy = new Gauntlet.Combatants.Monster();

  };


 return originalGauntlet;

}) (Gauntlet || {});