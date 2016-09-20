"use strict";

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.Armory = {};

  originalGauntlet.Armory.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;
    this.flavor = ["bat", "swing", "belt", "bonk", "buffet", "butt", "chop", "clip", "cuff", "knock", "lick", "paste", "plunk", "rap", "shock", "slug", "smack", "slap", "sock", "spank", "swat", "swipe", "tap", "thump", "uppercut", "wallop", "whop", "zap", "zallop", "kapow"]
    this.toString = function() {
      return this.name || this.weapon.name;
    }
  };
  Gauntlet.Armory.Weapon.prototype = new Gauntlet.Armory.Weapon();

  originalGauntlet.Armory.Dagger = function() {
    this.name = "a dagger";
    this.damage = 8;
    this.hands = 1;
  };
  Gauntlet.Armory.Dagger.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.BroadSword = function() {
    this.name = "a broad sword";
    this.damage = 20;
    this.hands = 2;
  };
  originalGauntlet.Armory.BroadSword.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.WarAxe = function() {
    this.name = "a war axe";
    this.damage = 14;
    this.hands = 2;
  };
  Gauntlet.Armory.WarAxe.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Wand = function() {
    this.name = "a wand";
    this.damage = 20;
    this.hands = 1;
  };
  Gauntlet.Armory.Wand.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Claymore = function() {
    this.name = "a claymore";
    this.damage = 15;
    this.hands = 2;
  };
  Gauntlet.Armory.Claymore.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Mace = function() {
    this.name = "a mace";
    this.damage = 22;
    this.hands = 2;
  };
  Gauntlet.Armory.Mace.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Shuriken = function() {
    this.name = "a shuriken";
    this.damage = 5;
    this.hands = 1;
  };
  Gauntlet.Armory.Shuriken.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Scythe = function() {
    this.name = "a scythe";
    this.damage = 27;
    this.hands = 1;
  };
  Gauntlet.Armory.Scythe.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Sai = function() {
    this.name = "a sai";
    this.damage = 5;
    this.hands = 1;
  };
  Gauntlet.Armory.Sai.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Katana = function() {
    this.name = "a katana";
    this.damage = 5;
    this.hands = 2;
  };
  Gauntlet.Armory.Katana.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Tonfa = function() {
    this.name = "a tonfa";
    this.damage = 5;
    this.hands = 1;
  };
  Gauntlet.Armory.Tonfa.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.BrassKnuckles = function() {
    this.name = "brass knuckles";
    this.damage = 13;
    this.hands = 2;
  };
  Gauntlet.Armory.BrassKnuckles.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Potions = function() {
    this.name = "potions";
    this.damage = 15;
    this.hands = 2;
  };
  Gauntlet.Armory.Potions.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Taser = function() {
    this.name = "a taser";
    this.damage = 20;
    this.hands = 1;
  };
  Gauntlet.Armory.Taser.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Staff = function() {
    this.name = "a staff";
    this.damage = 14;
    this.hands = 1;
  };
  Gauntlet.Armory.Staff.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.ShrunkenHead = function() {
    this.name = "a shrunken head";
    this.damage = 6;
    this.hands = 1;
  };
  Gauntlet.Armory.ShrunkenHead.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.SurpriseMe = function() {};
  Gauntlet.Armory.SurpriseMe.prototype = new originalGauntlet.Armory.Weapon();

 return originalGauntlet;

}) (Gauntlet || {});










