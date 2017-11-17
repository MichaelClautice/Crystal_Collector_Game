
// THIS IS MICHAEL CLAUTICE'S CRYSTAL COLLECTOR GAME

// LET'S DEFINE SOME VARIABLES!
    // numberToMatch is assigned a random integer between 019 - 120
    // this is a "range thing" that I need to learn more about
    var numberToMatch = Math.floor((Math.random()*120) + 19);

    // the 4 crystal buttons are assigned random integers between 01 - 12
    // this is a "range thing" that I need to learn more about
    var blueCrystal = Math.floor((Math.random() * 12) + 1);
    var redCrystal = Math.floor((Math.random() * 12) + 1);
    var yellowCrystal = Math.floor((Math.random() * 12) + 1);
    var greenCrystal = Math.floor((Math.random() * 12) + 1);

    // Setting initial "game-start" values to 0.
    var guessTotal = 0;
    var wins = 0;
    var losses = 0;

// LET'S DISPLAY SOME VALUES!
    // Displays the numberToMatch you need to guess in the markup
    // html() is a jQuery function!!
    $(".numberDisplay").html(numberToMatch);

// ON CLICK EVENTS THAT UPDATE EA OF THE 4 CRYSTALS
    $(".blueCrystal").click(function() {
        update(blueCrystal);
    });

    $(".redCrystal").click(function() {
        update(redCrystal);
    });

    $(".yellowCrystal").click(function() {
        update(yellowCrystal);
    });

    $(".greenCrystal").click(function() {
        update(greenCrystal);
    });

// THIS IS MICHAEL CLAUTICE'S CRYSTAL COLLECTOR GAME

// HERE'S A BIT OF JQUERY SLOW ANIMATION
// the jQuery toggle function opens & closes the game instructions
    $(".dropdown").click(function() {
        $(".instructions").toggle(2000);
    })

// DEFINING A RESET FUNCTION FOR EA NEW GAME
    function reset() {
        // Generates a new numberToMatch to guess.
       numberToMatch = Math.floor((Math.random() * 102) + 19);
        // Displays that numberToMatch on the page.
        $(".numberDisplay").html(numberToMatch);
        // Generates new values for the 4 crystals.
        blueCrystal = Math.floor((Math.random() * 12) + 1);
        redCrystal = Math.floor((Math.random() * 12) + 1);
        yellowCrystal = Math.floor((Math.random() * 12) + 1);
        greenCrystal = Math.floor((Math.random() * 12) + 1);
        // Resets the total guess to 0.
        guessTotal = 0;
        // Displays the guess total.
        $(".guessDisplay").html(guessTotal);
    };

    // This function updates the user's total guess.
    function update(currentCrystal) {
        // Increases the total guess by the value of the chosen crystal.
        guessTotal += currentCrystal;
        // Removes the old total and replaces it with the new total.
        $(".guessDisplay").empty();
        $(".guessDisplay").append(guessTotal);
        // Checks to see if you win or lose.
        if (guessTotal > numberToMatch) {
            // Adds a loss.
            losses++;
            // Displays updated losses.
            $("#lossesDisplay").html(losses);
            // Calls the reset function to reset the game.
            reset();


        } else if (guessTotal === numberToMatch) {
            // Adds a win.
            wins++;
            // Displays the updated wins.
            $("#winsDisplay").html(wins);
            // Calls the reset function to reset the game.
            reset();
        };
    };

// THIS IS MICHAEL CLAUTICE'S CRYSTAL COLLECTOR GAME


