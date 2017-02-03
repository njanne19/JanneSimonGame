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


 var sequence = [1, 4, 3, 1, 2, 4, 3, 2, 1, 4, 2, 1, 3, 1, 2];

function newRound() {
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


$('#start').click(newRound);


});
