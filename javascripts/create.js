"use strict";

var classId;

var Gauntlet = (function(originalGauntlet){

  var hero;

  originalGauntlet.createHero = function() {
    hero = new Gauntlet.Combatants.Human($('#player-name').val());
    hero.setClass(classId);
  };

  originalGauntlet.setCharacterClass = function(classId) {

    switch (classId) {
      case "warrior":
        console.log("Let's make a new warrior!");
        var x = new originalGauntlet.GuildHall.Warrior();
        break;
      case "valkyrie":
        console.log("Let's make a new valkyrie!");
        var x = new originalGauntlet.GuildHall.Valkyrie();
        break;
      case "berserker":
        console.log("Let's make a new berserker!");
        var x = new originalGauntlet.GuildHall.Berserker();
        break;
      case "monk":
        console.log("Let's make a new monk!");
        var x = new originalGauntlet.GuildHall.Monk();
        break;
      case "wizard":
        console.log("Let's make a new wizard!");
        var x = new originalGauntlet.GuildHall.Wizard();
        break;
      case "sorcerer":
        console.log("Let's make a new sorcerer!");
        var x = new originalGauntlet.GuildHall.Sorcerer();
        break;
      case "conjurer":
        console.log("Let's make a new conjurer!");
        var x = new originalGauntlet.GuildHall.Conjurer();
        break;
      case "thief":
        console.log("Let's make a new thief!");
        var x = new originalGauntlet.GuildHall.Thief();
        break;
      case "ninja":
        console.log("Let's make a new ninjna!");
        var x = new originalGauntlet.GuildHall.Ninja();
        break;
      case "assassin":
        console.log("Let's make a new assassin!");
        var x = new originalGauntlet.GuildHall.Assassin();
        break;
      case "surprise":
        console.log("Surprise me!");
        generateClass();
    }
    console.log(x);
    //return x;
  }

 return originalGauntlet;

}) (Gauntlet || {});