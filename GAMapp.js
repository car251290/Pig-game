/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore,activePlayer,dice, gamePlayer;
init();
//state variable = tell the condicion of variable 


document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice+ '<em>';
//to read the variable x and have the score 
var x = document.querySelector("#score-0").text;

console.log("x");

document.querySelector('.dice').style.display = 'none';
document.getElementsById('score-0').textContent = '0';
document.getElementsById('score-1').textContent = '0';
document.getElementsById('current-0').textContent = '0';
document.getElementsById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlayer) { 
             //1 random the number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2 update the random score
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";

    diceDom.src = 'dice-' + dice + ".png"; 

    //3 uodate the round score if the rolled number was not at 1   
    if(dice !== 1){
        //add score 
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

    } else {
        //the next player
       nextPlayer();

   } 
 }
     


});
   

// second evant lisenter this one is the second button to get to the score of the second player
document.querySelector('.btn-hold').addEventListener('click',function(){
  
    // if else stament  if the game is playing
    if(gamePlayer) {
      
  // add current sscore to global score
  score[activePlayer] += roundScore;
  //updat the ui
  document.querySelector('#score'+ activePlayer).textContent =  score[activePlayer];

  // check if player won the game
  if(score[activePlayer]>=100) {
      document.querySelector('#name-'+ activePlayer).textContent = 'winner game'
      document.querySelector('.dice').style.display = 'none';
      //this is for the classes of the css and will be remove and add 
      document.querySelector('.player'+ activePlayer + '-panel').classList.remove('active');
      document.querySelector('.player'+ activePlayer + '-panel').classList.add('winner');
      gamePlayer = false
  } else {
      //this one is the next player if the game continue
      nextPlayer();

  }

 }
});
        // the function next player to dont repate yourself
    function nextPlayer() {
            // check if player won the game
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementsById('current-0').textContent = '0';
        document.getElementsById('current-1').textContent = '0';

        // this one is for add and remove for a class in html
        // toggle is to add and remove in the class
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
    }
    //this one will call the function init because is in the parametors
    document.querySelector('.btn-new').addEventListener(click,init);

// this is the function that get the init of the game all back again
function init(){
        score = [0,0];
        roundScore = 0;
         activePlayer = 0;
        // var gamePlayer = true;

 document.querySelector('.dice').style.display = 'none';

document.getElementsById('score-0').textContent = '0';
document.getElementsById('score-1').textContent = '0';
document.getElementsById('current-0').textContent = '0';
document.getElementsById('current-1').textContent = '0';
document.getElementsById('name-0').textContent = 'player 1';
document.getElementsById('name-1').textContent = 'player 2';

// to show the active player and to remove the other plater
   document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');   
}









