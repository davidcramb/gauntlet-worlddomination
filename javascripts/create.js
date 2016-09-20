"use strict";

var hero;
var enemy;

var Gauntlet = (function(originalGauntlet){

// ---------- Main function that creates the player's hero character ------------------//
  originalGauntlet.createHero = function() {

    // --- creates a new hero object, feeding in the user-inputted name --- //
    hero = new Gauntlet.Combatants.Human($('#player-name').val());

    // --- takes results of the chooseCharacterClass function (see below),   --- //
    // --- creates a new class object and adds t(hat class to the hero object --- //
        hero.setClass(Gauntlet.chooseCharacterClass());

    // --- takes results of the chooseWeapon function (see below), creates   --- //
    // --- a new weapon object and adds the weapon to the hero object above  --- //
        hero.setWeapon(Gauntlet.chooseWeapon());

  };

  originalGauntlet.chooseCharacterClass = function() {

    // --- Prepares for setting a new hero class based on user's choice (classId) --- //
    // --- or randomly (via the generateClass function below). The result of this --- //
    // --- function is fed in (as a variable) in the setClass function (above)   --- //

    var x;

    if (classId === "surprise") {
      // --- The call to generateClass has to go in this way (on next line)  --- //
      // --- because we need 'x' to hold the new (randomly created) class.   --- //
      // --- If we just call the function (without making it equal x), we    --- //
      // --- won't be able to capture the value chosen by the function and   --- //
      // --- our hero will end up with 'undefined' for a class choice.       --- //

      // --- ALSO, it's necessary to call the function ON hero like this:    --- //
      // ---  hero.generateClass(); because otherwise the function won't     --- //
      // --- know where to look for the 'allowedClasses' array. It needs     --- //
      // --- the length of that array to do the randomizing, but without the --- //
      // --- hero. part of the call, it can't find the array and fails.      --- //
      x = hero.generateClass();
    }
    else {
      // --- Because our classIds are structured the same as our prototypes,   --- //
      // --- (same capitalization) we can feed in the id of the user-chosen    --- //
      // --- class and use object notation (square brackets below) to call the --- //
      // --- new instance of the class we need in the setClass function above. --- //
      // --- NOTE: a dot (.) before the opening bracket will throw an error!   --- //
      x = new Gauntlet.GuildHall[classId];
    }
    return x;
  };

// -------- Generates a random class in two scenarios:           ------------- //
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


// ----- Function to create new weapon object and add it to character ----- //

  originalGauntlet.chooseWeapon = function() {

    // ---------- See notes for chooseClass above ---------- //
    var y;

    if (weaponId === "SurpriseMe") {
      y = hero.generateWeapon();
    }
    else {
      y = new originalGauntlet.Armory[weaponId]();
    }

    return y;

  };

// ----- Creates a monster enemy with random species, class, and weapon --------- //

  originalGauntlet.createEnemy = function() {

    enemy = new Gauntlet.Combatants.Monster();
    enemy.generateSpecies();
    enemy.generateClass();
    enemy.generateWeapon();

  };


// ------ Adds a species to the randomly generated enemy object  ----------- //

  originalGauntlet.Combatants.Monster.prototype.setSpecies = function(species) {
    this.weapon = species;
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

  originalGauntlet.Combatants.Player.prototype.generateWeapon = function() {

    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

    var randomWeapon = this.allowedWeapons[random];

    this.weapon = new originalGauntlet.Armory[randomWeapon]();

    return this.weapon;
  };


 return originalGauntlet;

}) (Gauntlet || {});