function addScore(currentScore, eaten) {
  switch (eaten) {

    case 'dot' :
    scoreToAdd = 10;
    break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
      caser 'firstGhost':
      scoreToAdd = 200;
      break;
      case 'secondGhost':
      scoreToAdd = 200;
      break;
      case 'secondGhost':
      scoreToAdd = 400;
      break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;
