/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/* (in console) 
Math.random() - give a random number between zero and one
Math.random() * 6 - perfect for dice, and to get rid of decimals
Math.floor(Math.random() * 6) + 1   */



//DOM MANIPULATION - FIRST DOM MANIPULATION

/*

document.querySelector('#current-' + activePlayer).textContent = dice; //type coercion - if the value for activePlayer is zero then current-0 etc, dice is a variable

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

var x = document.querySelector('#score-0').textContent; //storing a value in variable 
console.log(x);


//EVENTS - NOTIFICATIONS SENT TO CODE THAT SOMETHIGN HAPPENED ON THE PAGE (CLICKING BUTTON, RESZIING WINDOW, SCROLLING DOWN)

//EVENT LISTENER - A FUNCTION THAT WAITS FOR AN EVENT TO HAPPEN AND THEN TRIGGERS AND ACTION

//HOW EVENTS ARE PROCESSED - EXECUTION STACK VS MESSAGE QUEUE


// function btn() { //do something here}
//btn(); - means that we are calling function

 document.querySelector('.btn-roll').addEventListener('click', btn) //no parentisis needed cause event listener calls the function for us; function can be either written directly into event listener or outisde
 

//PIG GAME


*/

var score, scores, activePlayer, gamePlaying; //STATE VARIABLE - gamePlaying...all of these need to be declared here to be global

init();

//ON BUTTON CLICK:

document.querySelector('.btn-roll').addEventListener('click', function () {


    if (gamePlaying) {


        //1.Random numer

        var dice = Math.floor(Math.random() * 6) + 1;




        //2. Display the result

        var diceDOM = document.querySelector('.dice'); //!!! WHY DO IT???

        diceDOM.style.display = 'block'; //bring it back to be visible on click from 'none'
        diceDOM.src = 'dice-' + dice + '.png'; //COERSION WOW - random number translated into image number



        //3. Update the round score IF result was not 1

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //QUERY SELECTOR FOR CLASSES
        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //document.querySelector('player-0-panel').classList.remove('active');
            //document.querySelector('player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
        }



    }


});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying)

    {

        //ADD CURRENT SCORE TO GLOBAL SCORE

        scores[activePlayer] += roundScore; //!!! LIKE COERCION AGAIN


        //UPDATE USER INTERFACE

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



        //CHECK IF PLAYER WON A GAME

        if (scores[activePlayer] >= 20) {


            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //ADDING THE WHOLE CLASS and REMOVING ANOTHER
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;


        } else {
            nextPlayer();
        }

    }

});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

};


//only init without () because you are not calling it now, just letting btn know to call it when its clicked on


document.querySelector('.btn-new').addEventListener('click', init);


function init() {



    scores = [0, 0]; //TWO GENERAL SCORES
    roundScore = 0; //ROUND SCORE - CAN ONLY BE ONE
    activePlayer = 0; //0 IS THE FIRST PLAYER (STARTING); 1 IS THE SECOND

    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none'; //changing CSS property for class .dice - image not visible

    document.getElementById('score-0').textContent = '0'; //by CSS ID -changing content
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

/*

YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/


//CHALLENGE 6 - PART 1 - WORKS

/*

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1

        if (lastDice === 6 && dice === 6) {

            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }

        lastDice = dice;
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }


    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

*/


//DOESN'T WORK - ARRAY

/*

var score, scores, activePlayer, gamePlaying, diceAll; //STATE VARIABLE - gamePlaying...all of these need to be declared here to be global

init();

//ON BUTTON CLICK:

document.querySelector('.btn-roll').addEventListener('click', function () {


    if (gamePlaying) {


        //1.Random numer

        var dice = Math.floor(Math.random() * 6) + 1;


        diceAll.push(dice);
        console.log(diceAll);


        //2. Display the result

        var diceDOM = document.querySelector('.dice'); //!!! WHY DO IT???

        diceDOM.style.display = 'block'; //bring it back to be visible on click from 'none'
        diceDOM.src = 'dice-' + dice + '.png'; //COERSION WOW - random number translated into image number



        //3. Update the round score IF result was not 1

        if (dice !== 1 && (dice !== 6 && diceAll[diceAll.length - 2] !== 6)) {

            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //QUERY SELECTOR FOR CLASSES
        } else if (dice === 6 && diceAll[diceAll.length - 2] === 6) // WHAT IS WRONG HERE??

        {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            diceAll = [];

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //document.querySelector('player-0-panel').classList.remove('active');
            //document.querySelector('player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            diceAll = [];

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //document.querySelector('player-0-panel').classList.remove('active');
            //document.querySelector('player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
        }



    }


});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying)

    {

        //ADD CURRENT SCORE TO GLOBAL SCORE

        diceAll = [];
        scores[activePlayer] += roundScore; //!!! LIKE COERCION AGAIN


        //UPDATE USER INTERFACE

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



        //CHECK IF PLAYER WON A GAME

        if (scores[activePlayer] >= 20) {


            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //ADDING THE WHOLE CLASS and REMOVING ANOTHER
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;


        } else {
            nextPlayer();
        }



    }



});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}



document.querySelector('.btn-new').addEventListener('click', init);


function init() {


    diceAll = [];
    scores = [0, 0]; //TWO GENERAL SCORES
    roundScore = 0; //ROUND SCORE - CAN ONLY BE ONE
    activePlayer = 0; //0 IS THE FIRST PLAYER (STARTING); 1 IS THE SECOND

    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none'; //changing CSS property for class .dice - image not visible

    document.getElementById('score-0').textContent = '0'; //by CSS ID -changing content
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

*/



// CHALLENGE 6 - PART 2 - WORKS




/*

var score, scores, activePlayer, gamePlaying; //STATE VARIABLE - gamePlaying...all of these need to be declared here to be global

init();

//ON BUTTON CLICK:

document.querySelector('.btn-roll').addEventListener('click', function () {


    if(gamePlaying) {
        
        
        //1.Random numer

    var dice = Math.floor(Math.random() * 6) + 1;




    //2. Display the result

    var diceDOM = document.querySelector('.dice'); //!!! WHY DO IT???

    diceDOM.style.display = 'block'; //bring it back to be visible on click from 'none'
    diceDOM.src = 'dice-' + dice + '.png'; //COERSION WOW - random number translated into image number



    //3. Update the round score IF result was not 1

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; //QUERY SELECTOR FOR CLASSES
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //document.querySelector('player-0-panel').classList.remove('active');
        //document.querySelector('player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }

        
        
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function () {

if(gamePlaying)
    
    {
        
      //ADD CURRENT SCORE TO GLOBAL SCORE

    scores[activePlayer] += roundScore; //!!! LIKE COERCION AGAIN


    //UPDATE USER INTERFACE

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        if(input) {winningScore = input} else { winningScore = 100};


    //CHECK IF PLAYER WON A GAME

    if (scores[activePlayer] >= input) {


        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //ADDING THE WHOLE CLASS and REMOVING ANOTHER
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;


    } else {
        nextPlayer();
    }  
        
        
        
    }
    


});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

};


//only init without () because you are not calling it now, just letting btn know to call it when its clicked on


document.querySelector('.btn-new').addEventListener('click', init);


function init() {



    scores = [0, 0]; //TWO GENERAL SCORES
    roundScore = 0; //ROUND SCORE - CAN ONLY BE ONE
    activePlayer = 0; //0 IS THE FIRST PLAYER (STARTING); 1 IS THE SECOND
    
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none'; //changing CSS property for class .dice - image not visible

    document.getElementById('score-0').textContent = '0'; //by CSS ID -changing content
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

*/

//CHALLENGE 6 - PART 3 - WORKS

/*

var score, scores, activePlayer, gamePlaying; //STATE VARIABLE - gamePlaying...all of these need to be declared here to be global

init();

//ON BUTTON CLICK:

document.querySelector('.btn-roll').addEventListener('click', function () {


    if (gamePlaying) {


        //1.Random numer

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;



        //2. Display the result

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        //COERSION WOW - random number translated into image number



        //3. Update the round score IF result was not 1

        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //QUERY SELECTOR FOR CLASSES
        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //document.querySelector('player-0-panel').classList.remove('active');
            //document.querySelector('player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.getElementById('#dice-1').style.display = 'none';
            document.getElementById('#dice-2').style.display = 'none';
        }



    }


});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying)

    {

        //ADD CURRENT SCORE TO GLOBAL SCORE

        scores[activePlayer] += roundScore; //!!! LIKE COERCION AGAIN


        //UPDATE USER INTERFACE

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



        //CHECK IF PLAYER WON A GAME

        if (scores[activePlayer] >= 20) {


            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //ADDING THE WHOLE CLASS and REMOVING ANOTHER
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;


        } else {
            nextPlayer();
        }



    }



});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

};


//only init without () because you are not calling it now, just letting btn know to call it when its clicked on


document.querySelector('.btn-new').addEventListener('click', init);


function init() {



    scores = [0, 0]; //TWO GENERAL SCORES
    roundScore = 0; //ROUND SCORE - CAN ONLY BE ONE
    activePlayer = 0; //0 IS THE FIRST PLAYER (STARTING); 1 IS THE SECOND

    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0'; //by CSS ID -changing content
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

*/
