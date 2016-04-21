"use strict";

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.Combatants = {};

  // Gauntlet.Combatants = {};



  originalGauntlet.Combatants.Orc = function() {
    this.health = this.health + 20;
    this.dexterity = this.dexterity - 10;
    this.intelligence = this.intelligence - 15;
    this.species = "Orc";
    this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
    this.generateClass = function() {
      // Get a random index from the allowed classes array
      var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
      // Get the string at the index
      var randomClass = this.allowedClasses[random];
      // Composes the corresponding player class into the player object
      this.class = new originalGauntlet.GuildHall[randomClass]();
      return this.class;
    }
  };

  originalGauntlet.Combatants.Orc.prototype = new originalGauntlet.Combatants.Monster();

  originalGauntlet.Combatants.Gremlin = function() {
    this.health = this.health - 30;
    this.dexterity = this.dexterity + 20;
    this.strength = this.strength - 20;
    this.species = "Gremlin";
    this.allowedClasses = ["Thief", "Ninja", "Assassin"];
    this.generateClass = function() {
      var random = Math.round(Math.random() * (this.allowedClasses.length -1));
      var randomClass = this.allowedClasses[random];
      this.class = new originalGauntlet.GuildHall[randomClass]();
      return this.class;
    }
  };
  originalGauntlet.Combatants.Gremlin.prototype = new originalGauntlet.Combatants.Monster();

  originalGauntlet.Combatants.Oompaloompa = function () {
    this.health = this.health - 40;
    this.dexterity = this.dexterity - 10;
    this.strength = this.strength - 25;
    this.species = "Oompa Loompa";
    this.allowedClasses = ["Wizard", "Conjurer"];
    this.generateClass = function () {
      var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
      var randomClass = this.allowedClasses[random];
      this.class = new originalGauntlet.GuildHall[randomClass]();
      return this.class;
    }
  };
  originalGauntlet.Combatants.Oompaloompa.prototype = new originalGauntlet.Combatants.Monster();

  originalGauntlet.Combatants.Adorableragamuffin = function () {
    this.health = this.health - 60;
    this.dexterity = this.dexterity - 30;
    this.strength = this.strength - 35;
    this.species = "Adorable Ragamuffin";
    this.allowedClasses = ["Beggar"];
    this.generateClass = function () {
      this.class = new originalGauntlet.GuildHall.Beggar();
      return this.class;
   }
  };
  originalGauntlet.Combatants.Adorableragamuffin.prototype = new originalGauntlet.Combatants.Monster();

 return originalGauntlet;

}) (Gauntlet || {});
