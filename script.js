$(document).ready(function () {

  function buttonOneHit () {
  $('div.buttonOne').attr('id', 'buttonOneHit');
  setTimeout($('div.buttonOne').removeAttr('id', 'buttonOneHit'), 500);
  }

  function buttonTwoHit () {
  $('div.buttonTwo').attr('id', 'buttonTwoHit');
  setTimeout($('div.buttonTwo').removeAttr('id', 'buttonTwoHit'), 500);
  }

  function buttonThreeHit () {
  $('div.buttonThree').attr('id', 'buttonThreeHit');
  setTimeout($('div.buttonThree').removeAttr('id', 'buttonThreeHit'), 500);
  }

  function buttonFourHit () {
  $('div.buttonFour').attr('id', 'buttonFourHit');
  setTimeout($('div.buttonFour').removeAttr('id', 'buttonFourHit'), 500);
  }

var choices = [3, 4, 2, 1, 4, 3];

function displaySequence () {
  for (var i = 0; i<choices.length; i++) {
    if (choices[i] == 1) {
      buttonOneHit();
      return;
    } else if (choices[i] == 2) {
      buttonTwoHit();
      return;
    } else if (choices[i] == 3) {
      buttonThreeHit();
      return;
    } else if (choices[i] == 4) {
      buttonFourHit();
      return;
    }
  }
}

displaySequence();

});
