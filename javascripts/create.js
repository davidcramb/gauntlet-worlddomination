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
        break;
    }

    return y;

  };

  // ----- Creates a monster enemy with random species, class, and weapon --------- //
  originalGauntlet.createEnemy = function() {


    enemy = new Gauntlet.Combatants.Monster();

    enemy.generateClass();
    enemy.generateSpecies();
    enemy.generateWeapon();

  };

   // ------ Generates a random class in two scenarios:           ---------- //
  // ------  1. if user chooses 'surprise me' instead of a class ---------- //
  // ------  2. when creating a new random enemy monster         ---------- //

  originalGauntlet.Combatants.Player.prototype.generateClass = function() {

    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new originalGauntlet.GuildHall[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };


  // ------ Chooses a random 'monster' species for the generated enemy ----- //

  originalGauntlet.Combatants.Monster.prototype.generateSpecies = function() {

    // Get a random index from the allowed species array
    var random = Math.round(Math.random() * (this.allowedSpecies.length - 1));

    // Get the string at the index
    var randomSpecies = this.allowedSpecies[random];

    // Composes the corresponding enemy species into the enemy object
    this.species = new originalGauntlet.Combatants[randomSpecies]();


    return this.species;
  };

  // ------ Chooses a random weapon for the generated enemy ----- //

  originalGauntlet.Combatants.Monster.prototype.generateWeapon = function() {

    // Get a random index from the allowed species array
    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

    // Get the string at the index
    var randomWeapon = this.allowedWeapons[random];

    // Composes the corresponding enemy species into the enemy object
    this.weapon = new originalGauntlet.Armory[randomWeapon]();

    return this.weapon;
  };


 return originalGauntlet;

}) (Gauntlet || {});