"use strict";

var classId;

var Gauntlet = (function(originalGauntlet){

  originalGauntlet.makeCharacter = function(classId) {
    
    switch (classId) {
      case "warrior":
        console.log("Let's make a new warrior!");
        var x = new originalGauntlet.Combatants.Human();
        break;
      case "valkyrie":
        console.log("Let's make a new valkyrie!");
        var x = new Valkyrie();
        break;
      case "berserker":
        console.log("Let's make a new berserker!");
        var x = new Berserker();
        break;
      case "monk":
        console.log("Let's make a new monk!");
        var x = new Monk();
        break;
      case "wizard":
        console.log("Let's make a new wizard!");
        var x = new Wizard();
        break;
      case "sorcerer":
        console.log("Let's make a new sorcerer!");
        var x = new Sorcerer();
        break;
      case "conjurer":
        console.log("Let's make a new conjurer!");
        var x = new Conjurer();
        break;
      case "thief":
        console.log("Let's make a new thief!");
        var x = new Thief();
        break;
      case "ninja":
        console.log("Let's make a new ninjna!");
        var x = new Ninja();
        break;
      case "assassin":
        console.log("Let's make a new assassin!");
        var x = new Assassin();
        break;
    }
    console.log(x);
    //return x;
  }

 return originalGauntlet;

}) (Gauntlet || {});