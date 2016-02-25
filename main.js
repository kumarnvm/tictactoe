var table;
var evenOdd = 0;
var playerX = "<div class='x'>X</div>"
var playerO = "<div class='o'>O</div>"

document.addEventListener('DOMContentLoaded', init);

function init() {
  table = document.getElementById('board');
  table.addEventListener('click', somethingHappens);
}

function somethingHappens(event) {
  if (evenOdd % 2 === 0) {
    event.target.innerHTML = playerX;
  } else {
    event.target.innerHTML = playerO;
  }
  evenOdd++;
  console.log(isThereAWinner());
}

function isThereAWinner() {
  var successX = 0;
  var successO = 0;
  for(var i = 1; i <= 8; i++) {
    var potentialWinners = table.getElementsByClassName(i);
    for(var j = 0; j < potentialWinners.length; j++) {
      if(potentialWinners[j].getElementsByClassName('x').length > 0) {
        successX++;
      }
      if(potentialWinners[j].getElementsByClassName('o').length > 0) {
        successO++;
      }
    }
    if(successX === 3) { return "x won!";}
    if(successO === 3) { return "o won!";}
    else { successX = 0; successO = 0; }
  }
}
