var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 10;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 20;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 10;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Wand = function() {
  this.name = "wand";
  this.damage = 20;
  this.hands = 1;
};
Wand.prototype = new Weapon();

var Claymore = function() {
  this.name = "claymore";
  this.damage = 10;
  this.hands = 2;
};
Claymore.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 10;
  this.hands = 2;
};
Mace.prototype = new Weapon();

var Shuriken = function() {
  this.name = "shuriken";
  this.damage = 5;
  this.hands = 1;
};
Shuriken.prototype = new Weapon();

var Scythe = function() {
  this.name = "scythe";
  this.damage = 15;
  this.hands = 1;
};
Scythe.prototype = new Weapon();

var Sai = function() {
  this.name = "sai";
  this.damage = 5;
  this.hands = 1;
};
Sai.prototype = new Weapon();

var Katana = function() {
  this.name = "katana";
  this.damage = 5;
  this.hands = 2;
};
Katana.prototype = new Weapon();

var Tonfa = function() {
  this.name = "tonfa";
  this.damage = 5;
  this.hands = 1;
};
Tonfa.prototype = new Weapon();

var BrassKnuckles = function() {
  this.name = "brass knuckles";
  this.damage = 10;
  this.hands = 2;
};
BrassKnuckles.prototype = new Weapon();

var Potions = function() {
  this.name = "potions";
  this.damage = 15;
  this.hands = 2;
};
Potions.prototype = new Weapon();

var Taser = function() {
  this.name = "taser";
  this.damage = 20;
  this.hands = 1;
};
Taser.prototype = new Weapon();

var Staff = function() {
  this.name = "staff";
  this.damage = 10;
  this.hands = 1;
};
Staff.prototype = new Weapon();

var ShrunkenHead = function() {
  this.name = "shrunken head";
  this.damage = 10;
  this.hands = 1;
};
ShrunkenHead.prototype = new Weapon();












