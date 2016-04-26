/*
  Test code to generate a human player and an orc player
 */
var testHero = new Gauntlet.Combatants.Human();
testHero.setWeapon(new Gauntlet.Armory.WarAxe());
testHero.setClass(new Gauntlet.GuildHall.Monk());
//testHero.generateClass();  // This will be used for "Surprise me" option
//console.log(testHero);
//console.log(testHero.skinColor);
//console.log(testHero.class.name);
//console.log(testHero.class.healthBonus);

var testEnemy = new Gauntlet.Combatants.Orc();
testEnemy.generateClass();
//testEnemy.setWeapon(new Gauntlet.Armory.BroadSword());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
//console.log("spell: ", spell.toString());


$(document).ready(function() {


  // --- Show the initial view that accepts player name --- //

  $("#player-setup").show();

  
  // --- Adds listeners to each of the class buttons --- //

  Gauntlet.addClickEvent();

  Gauntlet.addWeaponClick();

   // ----- Move on to next view with button with card__link class is clicked ----- //
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--prepare":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("player-name").val() !== "");
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  // ----- When the back button clicked, move back a view ----- //
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  // ----- When the defend button clicked, create the hero object ----- //
  $("#build__hero").click(function(e) {

    Gauntlet.createHero();
    Gauntlet.createEnemy();

    Gauntlet.setHealth(hero, enemy);

    //David Test Code
    Gauntlet.checkMagicUser(hero);
    //


    Gauntlet.outputHeroStats(hero);
    Gauntlet.outputEnemyStats(enemy);

  });

  $(".attack").click(function(e) {

    Gauntlet.attack(hero, enemy);

  });

  $("#playAgain").click(function(e) {
    console.log("restart function");
  });

  $("#continuePlay").click(function(e) {
    console.log("continue");
  });

});
