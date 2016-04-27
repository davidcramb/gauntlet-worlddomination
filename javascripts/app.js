/*
  Test code to generate a human player and an orc player
 */
var testHero = new Gauntlet.Combatants.Human();
testHero.setWeapon(new Gauntlet.Armory.WarAxe());
testHero.setClass(new Gauntlet.GuildHall.Monk());
//testHero.generateClass();  // This will be used for "Surprise me" option

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

// ----- Real game play functions start here as hero and enemy are created -------- //

  $("#build__hero").click(function(e) {
    // --- Calls functions to create hero and enemy (see CREATE.JS)
    Gauntlet.createHero();
    Gauntlet.createEnemy();

    // --- Calculates respective health of hero and enemy (see ATTACK.JS)
    Gauntlet.setHealth(hero, enemy);

    // --- Calls function to allow use of spellbook
    //Gauntlet.checkMagicUser(hero);

    // Displays initial hero and enemy statistics in the DOM (see STATS.JS) --- //
    Gauntlet.outputHeroStats(hero);
    Gauntlet.outputEnemyStats(enemy);

  });


  $(".attack").click(function(e) {
    // --- attack function, which can run over-and-over (see ATTACK.JS) --- //
    Gauntlet.attack(hero, enemy);

  });


  $("#playAgain").click(function(e) {
    // --- refreshes the page to start a new game from beginning --- //
    location.reload(true);
  });


  $("#continuePlay").click(function(e) {
    // --- A new enemy is generated (see CREATE.JS)--- //
    Gauntlet.createEnemy();

    // --- The health of the old hero and new enemy are set --- //
    // --- (see ATTACK.JS)
    Gauntlet.setHealth(hero, enemy);

    // --- Initial battle stats are displayed in the DOM (see STATS.JS)--- //
    Gauntlet.outputHeroStats(hero);
    Gauntlet.outputEnemyStats(enemy);

    // --- Moves page view back to the prep (stats display) area --- //
    // --- This call MUST come after the ones above or page will --- //
    // --- load too soon and display as blank (no stats showing) --- //
    var previousCard = $(this).attr("previous");
      $(".card").hide();
      $(".card--prepare").css("display","block");

    // --- Displays the attack button again (to allow play) --- //
    Gauntlet.showAttackBtn();
    // --- Hides the 'restart w new hero' button --- //
    Gauntlet.toggleRestartBtn();
    // --- Hides the 'continue w this hero' button --- //
    Gauntlet.toggleContinuePlayBtn();

  });

});
