/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
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
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);
  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Bolt = function() {
  this.name = "lightning bolt";
  this.damage = Math.floor(Math.random() * 10 + 11);
  this.type = this.damageTypes[0];
};
Gauntlet.SpellBook.Bolt.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Spiders = function() {
  this.name = "a swarm of spiders";
  this.damage = Math.floor(Math.random() * 10 + 15);
  this.type = this.damageTypes[4];
};
Gauntlet.SpellBook.Spiders.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Tidal = function() {
  this.name = "tidal wave";
  this.damage = Math.floor(Math.random() * 10 + 15);
  this.type = this.damageTypes[2];
};
Gauntlet.SpellBook.Tidal.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Flamewhip = function() {
  this.name = "fire whip";
  this.damage = Math.floor(Math.random() * 10 + 12);
  this.type = this.damageTypes[1];
};
Gauntlet.SpellBook.Flamewhip.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Noogie = function() {
  this.name = "noogie";
  this.damage = Math.floor(Math.random() * 10 + 5);
  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Noogie.prototype = new Gauntlet.SpellBook.Spell();

//If time allows add this in as a chance for a spell to fail and fizzle out.
Gauntlet.SpellBook.Fizzle = function() {
  this.name = "fizzle";
  this.damage = 0;
  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Fizzle.prototype = new Gauntlet.SpellBook.Spell();
