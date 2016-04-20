var Gauntlet = Gauntlet || {};
Gauntlet.Armory = {};

Gauntlet.Armory.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.toString = function() {
    return this.name;
  }
};
// Gauntlet.Armory.Weapon.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Dagger = function() {
  this.name = "dagger";
  this.damage = 10;
  this.hands = 1;
};
Gauntlet.Armory.Dagger.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 20;
  this.hands = 2;
};
Gauntlet.Armory.BroadSword.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.WarAxe = function() {
  this.name = "war axe";
  this.damage = 10;
  this.hands = 2;
};
Gauntlet.Armory.WarAxe.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Wand = function() {
  this.name = "wand";
  this.damage = 20;
  this.hands = 1;
};
Gauntlet.Armory.Wand.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Claymore = function() {
  this.name = "claymore";
  this.damage = 10;
  this.hands = 2;
};
Gauntlet.Armory.Claymore.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Mace = function() {
  this.name = "mace";
  this.damage = 10;
  this.hands = 2;
};
Gauntlet.Armory.Mace.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Shuriken = function() {
  this.name = "shuriken";
  this.damage = 5;
  this.hands = 1;
};
Gauntlet.Armory.Shuriken.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Scythe = function() {
  this.name = "scythe";
  this.damage = 15;
  this.hands = 1;
};
Gauntlet.Armory.Scythe.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Sai = function() {
  this.name = "sai";
  this.damage = 5;
  this.hands = 1;
};
Gauntlet.Armory.Sai.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Katana = function() {
  this.name = "katana";
  this.damage = 5;
  this.hands = 2;
};
Gauntlet.Armory.Katana.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Tonfa = function() {
  this.name = "tonfa";
  this.damage = 5;
  this.hands = 1;
};
Gauntlet.Armory.Tonfa.prototype = new Gauntlet.Armory.Weapon();
Gauntlet.Armory.BrassKnuckles = function() {
  this.name = "brass knuckles";
  this.damage = 10;
  this.hands = 2;
};
Gauntlet.Armory.BrassKnuckles.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Potions = function() {
  this.name = "potions";
  this.damage = 15;
  this.hands = 2;
};
Gauntlet.Armory.Potions.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Taser = function() {
  this.name = "taser";
  this.damage = 20;
  this.hands = 1;
};
Gauntlet.Armory.Taser.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Staff = function() {
  this.name = "staff";
  this.damage = 10;
  this.hands = 1;
};
Gauntlet.Armory.Staff.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.ShrunkenHead = function() {
  this.name = "shrunken head";
  this.damage = 10;
  this.hands = 1;
};
Gauntlet.Armory.ShrunkenHead.prototype = new Gauntlet.Armory.Weapon();












