"use strict";

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.Combatants = {};

  // Gauntlet.Combatants = {};

  originalGauntlet.SpellBook = {};

  /*
    Base spell function that defines name, damage, damage type
   */
  originalGauntlet.SpellBook.Spell = function() {
    this.name = "";
    this.damage = 0;
    this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
    this.type = "";

    this.toString = function() {
      return this.name + " of " + this.type + " for " + this.damage + " damage!";
    }
  };

  /*
    An elemental sphere that can be cast by a magical class
   */
  originalGauntlet.SpellBook.Sphere = function() {
    this.name = "sphere";
    this.damage = Math.floor(Math.random() * 10 + 10);
    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  originalGauntlet.SpellBook.Sphere.prototype = new originalGauntlet.SpellBook.Spell();

  originalGauntlet.SpellBook.Bolt = function() {
    this.name = "lightning bolt";
    this.damage = Math.floor(Math.random() * 10 + 11);
    this.type = this.damageTypes[0];
  };
  originalGauntlet.SpellBook.Bolt.prototype = new originalGauntlet.SpellBook.Spell();

  originalGauntlet.SpellBook.Spiders = function() {
    this.name = "a swarm of spiders";
    this.damage = Math.floor(Math.random() * 10 + 15);
    this.type = this.damageTypes[4];
  };
  originalGauntlet.SpellBook.Spiders.prototype = new originalGauntlet.SpellBook.Spell();

  originalGauntlet.SpellBook.Tidal = function() {
    this.name = "tidal wave";
    this.damage = Math.floor(Math.random() * 10 + 15);
    this.type = this.damageTypes[2];
  };
  originalGauntlet.SpellBook.Tidal.prototype = new originalGauntlet.SpellBook.Spell();

  originalGauntlet.SpellBook.Flamewhip = function() {
    this.name = "fire whip";
    this.damage = Math.floor(Math.random() * 10 + 12);
    this.type = this.damageTypes[1];
  };
  originalGauntlet.SpellBook.Flamewhip.prototype = new originalGauntlet.SpellBook.Spell();

  originalGauntlet.SpellBook.Noogie = function() {
    this.name = "noogie";
    this.damage = Math.floor(Math.random() * 10 + 5);
    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  originalGauntlet.SpellBook.Noogie.prototype = new originalGauntlet.SpellBook.Spell();

  //If time allows add this in as a chance for a spell to fail and fizzle out.
  originalGauntlet.SpellBook.Fizzle = function() {
    this.name = "fizzle";
    this.damage = 0;
    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  originalGauntlet.SpellBook.Fizzle.prototype = new originalGauntlet.SpellBook.Spell();

  return originalGauntlet;

}) (Gauntlet || {});
