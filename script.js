function buttonOneHit () {
$('div.buttonOne').attr('id', 'buttonOneHit');
}

function buttonTwoHit () {
$('div.buttonTwo').attr('id', 'buttonTwoHit');
}

function buttonThreeHit () {
$('div.buttonThree').attr('id', 'buttonThreeHit');
}

function buttonFourHit () {
$('div.buttonFour').attr('id', 'buttonFourHit');
}
$(document).ready(function() {


var sequence = [Math.floor(Math.random() * 4 + 1)];
var playerSequence = [];

function newRound() {
console.log(playerSequence);
console.log(sequence);
 sequence.push(Math.floor(Math.random() * 4 + 1));
 animate(sequence);
}
function animate(sequence) {
 var i = 0;
 var interval = setInterval(function() {
 lightUp(sequence[i]);
        i++;
        if (i >= sequence.length) {
 clearInterval(interval);
        }
   }, 600);
}
function lightUp(tile) {
  var rightBlock;
  switch(tile) {
    case 1:
    rightBlock = 'buttonOneHit';
    break;
    case 2:
    rightBlock = 'buttonTwoHit';
    break;
    case 3:
    rightBlock = 'buttonThreeHit';
    break;
    case 4:
    rightBlock = 'buttonFourHit';
    break;
  }
 var $tile = $('[data-tile=' + tile + ']').attr('id', rightBlock);
 window.setTimeout(function() {
 $tile.removeAttr('id', rightBlock);
 }, 300);
}

$('#start').click(function() {
animate(sequence);
$('.buttonOne').click(function() {
  lightUp(1);
  playerSequence.push(1);
  check();
});
$('.buttonTwo').click(function() {
  lightUp(2);
  playerSequence.push(2);
  check();
});
$('.buttonThree').click(function() {
  lightUp(3);
  playerSequence.push(3)
  check();
});
$('.buttonFour').click(function() {
  lightUp(4);
  playerSequence.push(4)
  check();
});
function check() {
while (playerSequence.length != sequence.length) {
  return;
}
if (playerSequence[playerSequence.length-1] == sequence[sequence.length-1]) {
  playerSequence = [];
  newRound();
} else {
  lightUp(1);
  lightUp(2);
  lightUp(3);
  lightUp(4);
  setTimeout(animate(sequence), 3000);

}

}

console.log(playerSequence);
});



});
