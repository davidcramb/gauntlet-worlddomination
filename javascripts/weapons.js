"use strict";

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.Armory = {};

  originalGauntlet.Armory.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;
    this.toString = function() {
      return this.name;
    }
  };
  // Gauntlet.Armory.Weapon.prototype = new Gauntlet.Armory.Weapon();

  originalGauntlet.Armory.Dagger = function() {
    this.name = "dagger";
    this.damage = 10;
    this.hands = 1;
  };
  originalGauntlet.Armory.Dagger.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 20;
    this.hands = 2;
  };
  originalGauntlet.Armory.BroadSword.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.WarAxe = function() {
    this.name = "war axe";
    this.damage = 10;
    this.hands = 2;
  };
  originalGauntlet.Armory.WarAxe.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Wand = function() {
    this.name = "wand";
    this.damage = 20;
    this.hands = 1;
  };
  originalGauntlet.Armory.Wand.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Claymore = function() {
    this.name = "claymore";
    this.damage = 10;
    this.hands = 2;
  };
  originalGauntlet.Armory.Claymore.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Mace = function() {
    this.name = "mace";
    this.damage = 10;
    this.hands = 2;
  };
  originalGauntlet.Armory.Mace.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Shuriken = function() {
    this.name = "shuriken";
    this.damage = 5;
    this.hands = 1;
  };
  originalGauntlet.Armory.Shuriken.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Scythe = function() {
    this.name = "scythe";
    this.damage = 15;
    this.hands = 1;
  };
  originalGauntlet.Armory.Scythe.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Sai = function() {
    this.name = "sai";
    this.damage = 5;
    this.hands = 1;
  };
  originalGauntlet.Armory.Sai.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Katana = function() {
    this.name = "katana";
    this.damage = 5;
    this.hands = 2;
  };
  originalGauntlet.Armory.Katana.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Tonfa = function() {
    this.name = "tonfa";
    this.damage = 5;
    this.hands = 1;
  };
  originalGauntlet.Armory.Tonfa.prototype = new originalGauntlet.Armory.Weapon();
  
  originalGauntlet.Armory.BrassKnuckles = function() {
    this.name = "brass knuckles";
    this.damage = 10;
    this.hands = 2;
  };
  originalGauntlet.Armory.BrassKnuckles.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Potions = function() {
    this.name = "potions";
    this.damage = 15;
    this.hands = 2;
  };
  originalGauntlet.Armory.Potions.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Taser = function() {
    this.name = "taser";
    this.damage = 20;
    this.hands = 1;
  };
  originalGauntlet.Armory.Taser.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.Staff = function() {
    this.name = "staff";
    this.damage = 10;
    this.hands = 1;
  };
  originalGauntlet.Armory.Staff.prototype = new originalGauntlet.Armory.Weapon();

  originalGauntlet.Armory.ShrunkenHead = function() {
    this.name = "shrunken head";
    this.damage = 10;
    this.hands = 1;
  };
  originalGauntlet.Armory.ShrunkenHead.prototype = new originalGauntlet.Armory.Weapon();

 return originalGauntlet;

}) (Gauntlet || {});










