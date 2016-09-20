"use strict";

var Gauntlet = (function(originalGauntlet){


  originalGauntlet.Combatants.Orc = function() {
    this.health = this.health + 20;
    this.dexterity = this.dexterity - 10;
    this.intelligence = this.intelligence - 15;
    this.name = "Orc";
    this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  };
  originalGauntlet.Combatants.Orc.prototype = new originalGauntlet.Combatants.Monster();

  originalGauntlet.Combatants.Gremlin = function() {
    this.health = this.health - 30;
    this.dexterity = this.dexterity + 20;
    this.strength = this.strength - 20;
    this.name = "Gremlin";
    this.allowedClasses = ["Thief", "Ninja", "Assassin"];
  };
  originalGauntlet.Combatants.Gremlin.prototype = new originalGauntlet.Combatants.Monster();

  originalGauntlet.Combatants.Oompaloompa = function () {
    this.health = this.health - 40;
    this.dexterity = this.dexterity - 10;
    this.strength = this.strength - 25;
    this.name = "Oompa Loompa";
    this.allowedClasses = ["Wizard", "Conjurer"];
  };
  originalGauntlet.Combatants.Oompaloompa.prototype = new originalGauntlet.Combatants.Monster();

  originalGauntlet.Combatants.Adorableragamuffin = function () {
    this.health = this.health - 60;
    this.dexterity = this.dexterity - 30;
    this.strength = this.strength - 35;
    this.name = "Adorable Ragamuffin";
    this.allowedClasses = ["Beggar"];
  };
  originalGauntlet.Combatants.Adorableragamuffin.prototype = new originalGauntlet.Combatants.Monster();

 return originalGauntlet;

}) (Gauntlet || {});
