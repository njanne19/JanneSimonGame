/* function buttonOneHit () {
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
} */
function buttonOneHit () {
lightUp(1);
}

function buttonTwoHit () {
lightUp(2);
}

function buttonThreeHit () {
lightUp(3);
}

function buttonFourHit () {
lightUp(4);
}
$(document).ready(function() {


var sequence = [Math.floor(Math.random() * 4 + 1)];
var playerSequence = [];

function newRound() {
  ///////
  function buttonOneHit () {
  lightUp(1);
  }

  function buttonTwoHit () {
  lightUp(2);
  }

  function buttonThreeHit () {
  lightUp(3);
  }

  function buttonFourHit () {
  lightUp(4);
  }
  /////////
  if (eval($('.counter').text()) == 20) {
    $('.fullGame').remove();
    $('.title').remove();
    $('.winScreen').attr('id', 'winScreenLit');
    launchFireworks();
    window.alert("Congragulations! You have won the game!");
    return;
  }
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
    var audio = new Audio('simonSound1.mp3');
    audio.play();
    break;
    case 2:
    rightBlock = 'buttonTwoHit';
    var audio = new Audio('simonSound2.mp3');
        audio.play();
    break;
    case 3:
    rightBlock = 'buttonThreeHit';
    var audio = new Audio('simonSound3.mp3');
        audio.play();
    break;
    case 4:
    rightBlock = 'buttonFourHit';
    var audio = new Audio('simonSound4.mp3');
        audio.play();
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
  setTimeout(check(), 3000);
});
$('.buttonTwo').click(function() {
  lightUp(2);
  playerSequence.push(2);
  setTimeout(check(), 3000);
});
$('.buttonThree').click(function() {
  lightUp(3);
  playerSequence.push(3)
  setTimeout(check(), 3000);
});
$('.buttonFour').click(function() {
  lightUp(4);
  playerSequence.push(4)
  setTimeout(check(), 3000);
});
function check() {
while (playerSequence.length != sequence.length) {
  setTimeout(check(), 3000);
}
if (playerSequence[playerSequence.length-1] == sequence[sequence.length-1]) {
  playerSequence = [];
  counter();
  setTimeout(newRound, 300);
} else {
  lightUp(1);
  lightUp(2);
  lightUp(3);
  lightUp(4);
  if ((document.getElementById("mySelect").selectedIndex) == 1) {
    playerSequence = [];
    $('.counter').text('--');
    sequence = [];
    newRound();
  }
  playerSequence = [];
  animate(sequence);
}
function counter () {
  if ($('.counter').text() == "--") {
    $('.counter').text('1');
  } else {
    $('.counter').text(eval($('.counter').text()) + 1);
  }
}


}

console.log(playerSequence);
});



});
