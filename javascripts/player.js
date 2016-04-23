"use strict";

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.Combatants = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  originalGauntlet.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;

    this.playerName = name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);
    this.limbs = ["head", "neck", "arm", "leg", "torso"];
    this.skinColor = "gray";
    this.skinColors = [this.skinColor];
    this.strength = 90;
    this.intelligence = 90;
    this.dexterity = 90;

    this.toString = function() {
      var output = [this.playerName,
        ": a ",
        this.skinColor,
        "-skinned ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health. ",
        //(this.class.magical) ? "Able to cast " : " Wielding his ",
        " Weapon of choice: ",
        // this.weapon.toString(),
        this.weapon,
        "!"
      ].join("");
      return output;
    };
  };


  // ------ Adds a weapon to the player object based on user's choice ----------- //

  originalGauntlet.Combatants.Player.prototype.setWeapon = function(chosenWeapon) {
    this.weapon = chosenWeapon;
  }


  // ---------- Sets new class based on user's input ----------- //
  originalGauntlet.Combatants.Player.prototype.setClass = function(newClass) {
    this.class = newClass;
    //this.health += this.class.healthBonus;
  };

  /*
    Define the base properties for a human in a 
    constructor function.
   */
  originalGauntlet.Combatants.Human = function(name) {
    var randomSkin;
    this.playerName = name || "unknown adventurer";
    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.skinColors.push("brown", "red", "white", "disease");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  };
  originalGauntlet.Combatants.Human.prototype = new originalGauntlet.Combatants.Player();



  // ---- Define the base properties for a monster in a constructor function. ---- //

  originalGauntlet.Combatants.Monster = function() {
    this.health = this.health - 30;
    this.intelligence = this.intelligence -20;
    this.strength = this.strength + 30;
    this.dexterity = this.dexterity - 10;
    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
    this.allowedSpecies = ["Orc", "Oompaloompa", "Gremlin", "Adorableragamuffin"];
    this.allowedWeapons = ["BroadSword", "WarAxe", "Mace"];

  };

  originalGauntlet.Combatants.Monster.prototype = new originalGauntlet.Combatants.Player();


  return originalGauntlet;

}) (Gauntlet || {});
